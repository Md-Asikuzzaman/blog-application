import prisma from "@/app/database";
import { NextResponse } from "next/server";

interface ApiResponse {
  tags?: TagType[];
  message?: string;
}

export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const tags = await prisma.tag.findMany();

    return NextResponse.json({ tags }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data." },
      { status: 500 }
    );
  }
}
