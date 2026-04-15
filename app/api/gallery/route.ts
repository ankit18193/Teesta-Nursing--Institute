import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = checkAuth(req);

    // if (!user) {
    //   return NextResponse.json(
    //     { success: false, message: "Unauthorized" },
    //     { status: 401 }
    //   );
    // }

    const body = await req.json();
    const { image, imageId } = body;

    if (!image || !imageId) {
      return NextResponse.json(
        { success: false, message: "Image required" },
        { status: 400 }
      );
    }

    const gallery = await prisma.gallery.create({
      data: {
        image,
        imageId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Image added to gallery",
      data: gallery,
    });

  } catch (error: any) {
    console.error("CREATE GALLERY ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}



export async function GET() {
  try {
    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: gallery,
    });

  } catch (error: any) {
    console.error("GET GALLERY ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}