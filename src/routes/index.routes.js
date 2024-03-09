import { Router } from "express";
import customerRoutes from "./customer.routes.js";
import adminRoutes from "./admin.routes.js";
const router = Router();

router.use("/api/v1/customers", customerRoutes);
router.use("/api/v1/admins", adminRoutes);

export default router;
