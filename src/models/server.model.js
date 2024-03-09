import express from "express";
import router from "../routes/index.routes.js";
import connectDB from "../database/dbConection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3400;
    this.middlewares();
    this.dbConection();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use(router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server on port ${this.port}`);
    });
  }

  async dbConection() {
    connectDB();
  }
}
