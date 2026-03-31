import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { noticeSchema } from "@/lib/notice_validation";

// GET all notices
export async function GET() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: notices,
    });
  } catch (error) {
    console.error("GET NOTICE ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// POST create notice
export async function POST(req: Request) {
  try {
       const user=checkAuth(req);
      if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
    const body = await req.json();

    const parsed = noticeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation Error",
          error:parsed.error.issues[0]?.message
        },
        { status: 400 }
      );
    }
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Title and content required" },
        { status: 400 }
      );
    }

    const notice = await prisma.notice.create({
      data: { title, content },
    });

    return NextResponse.json({
      success: true,
      data: notice,
      message: "Notice created",
    });
  } catch (error) {
    console.error("CREATE NOTICE ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}