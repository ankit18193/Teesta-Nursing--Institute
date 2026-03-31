import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";

// DELETE course
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

    await prisma.course.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error: any) {
    console.error("DELETE COURSE ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}