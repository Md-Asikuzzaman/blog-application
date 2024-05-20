import prisma from "@/app/database";
import { NextResponse } from "next/server";

interface ApiResponse {
  updatedCategory?: CategoryType;
  message?: string;
}

interface ParamsType {
  params: {
    id: string;
  };
}

// [UPDATE] category by ID
export async function PATCH(
  request: Request,
  context: ParamsType
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;
    const body = await request.json();

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({ updatedCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update category." },
      {
        status: 500,
      }
    );
  }
}

// [DELETE] category by ID
export async function DELETE(
  request: Request,
  context: ParamsType
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;

    await prisma.category.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Category deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update category." },
      {
        status: 500,
      }
    );
  }
}
