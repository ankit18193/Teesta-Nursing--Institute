import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { testimonialSchema } from "@/lib/testimonial_validation";

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
    console.error("GET TESTINOMIALS ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// POST create testimonial
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

    const parsed = testimonialSchema.safeParse(body);

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

    const { name, course, message, image, imageId } = parsed.data;

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
        imageId,
      },
    });

    return NextResponse.json({
      success: true,
      data: testimonial,
      message: "Testimonial created successfully",
    });
  } catch (error) {
    console.error("CRREATE TESTINOMIALS ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}