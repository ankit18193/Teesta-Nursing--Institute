import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// DELETE
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.inquiry.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ success: true });
}