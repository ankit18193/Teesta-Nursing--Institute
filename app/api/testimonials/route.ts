import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all testimonials
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// POST create testimonial
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, course, message, image } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, message: "Name and message are required" },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        course,
        message,
        image,
      },
    });

    return NextResponse.json({
      success: true,
      data: testimonial,
      message: "Testimonial created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}