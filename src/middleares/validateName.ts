import { count } from "console";
import { Response } from "express";
import { Request } from "express";

export const validatename = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "The name cannot be empty" });
  }

  const nameRemoveSpaces = name.replace(/\s/g, "");

  if (nameRemoveSpaces.length < 3) {
    return res
      .status(400)
      .json({ message: "The name field must contain 3 characters" });
  }

  const splitName = name.trim().split(/\s* |s*/);

  const countWords = splitName.length;

  if (countWords <= 1) {
    return res.status(400).json({ message: "fill in the full name" });
  }

  next();
};
