import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// PATCH → update lead status
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const text = await req.text();
    if (!text) {
      return NextResponse.json(
        { success: false, message: "Status is required" },
        { status: 400 }
      );
    }

    let body: any;
    try {
      body = JSON.parse(text);
    } catch (e) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { success: false, message: "Status is required" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.update({
      where: { id: Number(id) },
      data: { status },
    });

    return NextResponse.json({
      success: true,
      data: lead,
      message: "Lead updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}