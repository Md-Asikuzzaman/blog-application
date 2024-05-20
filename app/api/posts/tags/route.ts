import prisma from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
  tags?: TagType[];
  message?: string;
}

export async function GET() {
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

// [CREATE] a new tag
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newPost = await prisma.tag.create({
      data: body,
    });

    return NextResponse.json({ message: "cerate tag.." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create data" },
      { status: 500 }
    );
  }
}
