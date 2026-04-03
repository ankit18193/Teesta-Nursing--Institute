import { checkAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
  try {
    const user=checkAuth(req);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
        
    const totalLeads = await prisma.lead.count();

    const newLeads = await prisma.lead.count({
      where: { status: "NEW" },
    });

    const contactedLeads = await prisma.lead.count({
      where: { status: "CONTACTED" },
    });

    return NextResponse.json({
      success: true,
      data: {
        totalLeads,
        newLeads,
        contactedLeads,
      },
    });
  } catch (error) {
    console.error("GET STATS ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}