import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET CONTACT
export async function GET() {
  try {
    let contact = await prisma.contact.findFirst();

    // If not exists → create default
    if (!contact) {
      contact = await prisma.contact.create({
        data: {
          address: "",
          phone: "",
          email: "",
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching contact" },
      { status: 500 }
    );
  }
}

// UPDATE CONTACT
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { address, phone, email } = body;

    const contact = await prisma.contact.upsert({
      where: { id: 1 },
      update: {
        address,
        phone,
        email,
      },
      create: {
        id: 1,
        address,
        phone,
        email,
      },
    });

    return NextResponse.json({
      success: true,
      data: contact,
      message: "Contact updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error updating contact" },
      { status: 500 }
    );
  }
}