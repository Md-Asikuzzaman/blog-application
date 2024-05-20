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

// [UPDATE] tag by ID
export async function PATCH(
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

// [DELETE] tag by ID
export async function DELETE(
  request: Request,
  context: ParamsType
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;

    await prisma.tag.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Tag deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update tag.",
      },
      { status: 500 }
    );
  }
}
