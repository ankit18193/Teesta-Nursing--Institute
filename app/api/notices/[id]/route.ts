import { prisma } from "@/lib/prisma";
import { NextResponse,NextRequest } from "next/server";
import { checkAuth } from "@/lib/auth";

// PATCH
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
          const user=checkAuth(req);
          const {id}= await params;
          if (!user) {
        return NextResponse.json(
          { success: false, message: "Unauthorized" },
          { status: 401 }
        );
      }
    const body = await req.json();

    const notice = await prisma.notice.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({
      success: true,
      data: notice,
      message: "Notice updated",
    });
  } catch (error) {
    console.error("UPDATE NOTICE ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
          const user=checkAuth(req);
          const {id}= await params;
          if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
    await prisma.notice.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      success: true,
      message: "Notice deleted",
    });
  } catch (error) {
    console.error("DELETE NOTICE ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}