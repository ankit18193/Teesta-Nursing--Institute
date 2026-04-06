import { verifyToken } from "@/lib/jwt";

export function checkAuth(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) return null;

  const token = authHeader.split(" ")[1];

  if (!token) return null;

  const decoded = verifyToken(token);

  if(!decoded) return null;

  return decoded;
}