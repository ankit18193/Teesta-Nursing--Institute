import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all courses
export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// POST create course (admin)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, duration, description, eligibility } = body;

    if (!title) {
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        duration,
        description,
        eligibility,
      },
    });

    return NextResponse.json({
      success: true,
      data: course,
      message: "Course created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}