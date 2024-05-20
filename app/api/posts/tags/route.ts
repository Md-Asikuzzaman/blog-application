import prisma from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
  tags?: TagType[];
  newTag?: TagType;
  message?: string;
}

// [FETCH] all tags
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json({ tags }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch tags." },
      { status: 500 }
    );
  }
}

// [CREATE] a new tag
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const newTag = await prisma.tag.create({
      data: body,
    });

    return NextResponse.json({ newTag }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create tag." },
      { status: 500 }
    );
  }
}
