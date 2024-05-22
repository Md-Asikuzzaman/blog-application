import prisma from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
  categories?: CategoryType[];
  newCategory?: CategoryType;
  message?: string;
}

// [FETCH] all category
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const categories = await prisma.category.findMany({
      include: {
        posts: true,
        _count: true,
      },
    });

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch catetegories." },
      { status: 500 }
    );
  }
}

// [CREATE] a new category
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();

    const newCategory = await prisma.category.create({
      data: body,
    });

    return NextResponse.json({ newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create category." },
      { status: 500 }
    );
  }
}
