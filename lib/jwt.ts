import jwt from "jsonwebtoken";

type TokenPayload = {
  id: number;
  email: string;
};

export function generateToken(payload: TokenPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return null;
  }
}