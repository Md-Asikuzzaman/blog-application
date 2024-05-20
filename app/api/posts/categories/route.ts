import prisma from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

// [FETCH] all category
export async function GET(request: NextRequest) {
  try {
    const catetegories = await prisma.category.findMany();

    return NextResponse.json({ catetegories }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch catetegories." },
      { status: 500 }
    );
  }
}

// [CREATE] a new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newCategory = await prisma.category.create({
      data: body,
    });

    return NextResponse.json({ newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create category" },
      { status: 500 }
    );
  }
}
