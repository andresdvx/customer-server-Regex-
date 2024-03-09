import bcrypt from "bcrypt";

const descryptPassword = async (password, hashedPassword) => {
  const descryptedPassword = await bcrypt.compare(password, hashedPassword);
  return descryptedPassword;
};

export default descryptPassword;
