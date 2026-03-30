import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST → Create Lead
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, course, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        course,
        message,
      },
    });

    return NextResponse.json({
      success: true,
      data: lead,
      message: "Lead created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// GET → Get all leads
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: leads,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}