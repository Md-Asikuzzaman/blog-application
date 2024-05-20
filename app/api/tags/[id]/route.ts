import prisma from "@/app/database";
import { NextResponse } from "next/server";

interface ApiResponse {
  updatedTag?: TagType;
  message?: string;
}

interface ParamsType {
  params: {
    id: string;
  };
}

export async function POST(
  request: Request,
  context: ParamsType
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;
    const data = await request.json();

    const updatedTag = await prisma.tag.update({
      where: { id },
      data,
    });

    return NextResponse.json({ updatedTag }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update tag.",
      },
      { status: 500 }
    );
  }
}
