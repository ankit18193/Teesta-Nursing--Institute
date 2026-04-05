import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { deleteImage } from "@/lib/cloudinary";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 🔐 AUTH CHECK
    
    const user = checkAuth(req);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const numericId = Number(id);

    // ⚠️ Validate ID
    if (!numericId) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    // 🔍 Find record
    const testimonial = await prisma.testimonial.findUnique({
      where: { id:numericId },
    });

    if (!testimonial) {
      return NextResponse.json(
        { success: false, message: "Testimonial not found" },
        { status: 404 }
      );
    }

    // 🖼️ Try deleting image (non-blocking)
    if (testimonial.imageId) {
      try {
         await deleteImage(testimonial.imageId);

        // // Optional: check Cloudinary response
        // if (result?.result !== "ok" && result?.result !== "not found") {
        //   console.warn("Image delete unexpected response:", result);
        // }
      } catch (err) {
        console.error("Image delete failed:", err);
        // ❗ Do NOT stop execution
      }
    }

    // 🧠 Delete from DB (MAIN ACTION)
    await prisma.testimonial.delete({
      where: { id:numericId },
    });

    return NextResponse.json({
      success: true,
      message: "Testimonial deleted successfully",
    });

  } catch (error: any) {
    console.error("DELETE TESTIMONIAL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete testimonial",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}