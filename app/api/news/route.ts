import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";

// GET ALL NEWS
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 5;

    const skip = (page - 1) * limit;

    const news = await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    const total = await prisma.news.count();

    return NextResponse.json({
      success: true,
      data: news,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching news" },
      { status: 500 }
    );
  }
}

// CREATE NEWS
export async function POST(req: Request) {
  try {
    const user = checkAuth(req);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, content, image } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Title & content required" },
        { status: 400 }
      );
    }

    const news = await prisma.news.create({
      data: {
        title,
        content,
        image: image || null,
      },
    });

    return NextResponse.json({
      success: true,
      data: news,
      message: "News created",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error creating news" },
      { status: 500 }
    );
  }
}