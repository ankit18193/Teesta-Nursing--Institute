import { checkAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { LeadStatus } from "@prisma/client";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = checkAuth(req);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await req.json();

    const { name, phone, course, status } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.update({
      where: { id: Number(id) },
      data: {
        name: name?.trim(),
        phone: phone?.trim(),
        course: course?.trim() || null,
        status: status as LeadStatus,
      },
    });

    return NextResponse.json({
      success: true,
      data: lead,
      message: "Lead updated successfully",
    });
  } catch (error) {
    console.error("UPDATE LEAD ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.lead.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500 }
    );
  }
}