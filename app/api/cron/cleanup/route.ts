import { NextResponse } from "next/server";
import { cleanupImages } from "@/lib/cleanupImages";

export async function GET() {
  await cleanupImages();

  return NextResponse.json({
    success: true,
    message: "Cleanup done",
  });
}