import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// CREATE INQUIRY
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email,course, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone required" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        course:course?.trim() || null,
        message: message?.trim() || null,
      },
    });

    return NextResponse.json({
      success: true,
      data: inquiry,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("CREATE INQUIRY ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET ALL INQUIRIES (WITH SEARCH + PAGINATION)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    // 🔍 FILTER
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { phone: { contains: search } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    // 📦 DATA
    const inquiries = await prisma.inquiry.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    // 📊 TOTAL COUNT
    const total = await prisma.inquiry.count({ where });

    return NextResponse.json({
      success: true,
      data: inquiries,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET INQUIRY ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}