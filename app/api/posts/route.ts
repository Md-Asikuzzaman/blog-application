import prisma from "@/app/database";
import { NextResponse, NextRequest } from "next/server";

interface ApiResponse {
  posts?: ApiPostType[];
  newPost?: ApiPostType;
  message?: string;
}

// [FETCH] all posts
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    let posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },

      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch posts." },
      { status: 500 }
    );
  }
}

// [CREATE] a new post
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const newPost = await prisma.post.create({
      data: body,
      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });

    return NextResponse.json({ newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create post." },
      { status: 500 }
    );
  }
}
