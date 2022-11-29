import { Response } from "express";
import { Request } from "express";

export const verifyPassword = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "The password cannot be empty" });
  }
  const passwordRemoveSpaces = password.replace(/\s/g, "");

  if (passwordRemoveSpaces.length < 6) {
    return res
      .status(400)
      .json({ message: "The password field must contain 6 characters" });
  }
  const checkNumbers = /[0-9]/gm.test(password);
  const checkUppercase = /[A-Z]/gm.test(password);

  if (!checkNumbers) {
    return res.status(400).json({
      message: "The password must contain at least one number ",
    });
  }
  if (!checkUppercase) {
    return res.status(400).json({
      message: "The password field must contain at least one capital letter",
    });
  }
  next();
};
