import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { courseSchema } from "@/lib/course_validation";

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
    console.error("GET COURSE ERROR")
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// POST create course (admin)
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

       const parsed = courseSchema.safeParse(body);
    
        if (!parsed.success) {
          return NextResponse.json(
            {
              success: false,
              message:"Invalid input",
              error:parsed.error.issues[0]?.message
            },
            { status: 400 }
          );
        }

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
    console.error("CREATE COURSE ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}