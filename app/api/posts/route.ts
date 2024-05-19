import prisma from "@/app/database";
import { createPostSchema } from "@/schema/post";
import { NextResponse, NextRequest } from "next/server";
import { ZodIssue } from "zod";

// check cookie
// import { cookies, headers } from "next/headers";
// test cookie
// cookies().set("username", "asik", { secure: true });

// test token by header
// const token = headers().get("authorization")?.split(" ")[1] as any;
// console.log("Token from header: " + token);

interface ApiResponse {
  posts?: PostType[];
  newPost?: PostType;
  message?: string | ZodIssue[];
}

// [FETCH] all posts
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    let posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(posts);

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
    const validation = createPostSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors },
        { status: 500 }
      );
    }

    const newPost = await prisma.post.create({
      data: body,
    });

    return NextResponse.json({ newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create data" },
      { status: 500 }
    );
  }
}
