import { checkAuth } from "@/lib/auth";
import { leadSchema } from "@/lib/lead_validation";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST → Create Lead
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input",
          error:parsed.error.issues[0]?.message
        },
        { status: 400 }
      );
    }
    const { name, phone, email, course, message } = parsed.data;

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
  } catch (error:any) {
    console.error("CREATE LEAD ERROR:",error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET → Get all leads
export async function GET(req: Request) {
  try {
    const user=checkAuth(req);

    if(!user){
      return NextResponse.json(
        {success:false, message:"Unauthorized"},
        {status: 401}
      )
    }

    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    // Build filter
    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { phone: { contains: search } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    const leads = await prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    const total = await prisma.lead.count({ where });

    return NextResponse.json({
      success: true,
      data: leads,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error:any) {
    console.error("GET LEADS ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}