import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json({ success: true, categories });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
