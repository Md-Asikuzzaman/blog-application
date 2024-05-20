import prisma from "@/app/database";
import { NextResponse } from "next/server";

interface ApiResponse {
  message?: string;
  post?: ApiPostType | null;
}

interface ParamsType {
  params: {
    id: string;
  };
}

// [GET] post by ID
export async function GET(
  request: Request,
  context: ParamsType
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to get post.",
      },
      { status: 500 }
    );
  }
}
