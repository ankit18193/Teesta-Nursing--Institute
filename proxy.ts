import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const token = req.headers.get("authorization");

  if (!token || token !== "admin-secret-token") {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/courses/:path*",
    "/api/testimonials/:path*",
    "/api/leads/:path*",
  ],
};