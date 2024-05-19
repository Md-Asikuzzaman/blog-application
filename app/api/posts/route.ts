import prisma from "@/app/database";
import { NextResponse, NextRequest } from "next/server";
import { ZodIssue } from "zod";

import { createPostSchema } from "@/schema/post";

interface ApiResponse {
  posts?: ApiPostType[];
  newPost?: ApiPostType;
  message?: string | ZodIssue[];
}

// [FETCH] all posts
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    let posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        author: true,

        categories: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data." },
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
    // const validation = createPostSchema.safeParse(body);

    // if (!validation.success) {
    //   return NextResponse.json(
    //     { message: validation.error.errors },
    //     { status: 500 }
    //   );
    // }

    console.log(body);

    const newPost = await prisma.post.create({
      data: body,
    });

    return NextResponse.json({ message: "cerate" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create data" },
      { status: 500 }
    );
  }
}
