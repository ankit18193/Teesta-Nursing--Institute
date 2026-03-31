import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { deleteImage } from "@/lib/cloudinary";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = checkAuth(req);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const id = Number(params.id);

    const gallery = await prisma.gallery.findUnique({
      where: { id },
    });

    if (!gallery) {
      return NextResponse.json(
        { success: false, message: "Image not found" },
        { status: 404 }
      );
    }

    // 🖼️ Delete from Cloudinary
    try {
      if (gallery.imageId) {
        await deleteImage(gallery.imageId);
      }
    } catch (err) {
      console.error("Gallery image delete failed:", err);
    }

    // 🧠 Delete from DB
    await prisma.gallery.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Image deleted",
    });

  } catch (error: any) {
    console.error("DELETE GALLERY ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}