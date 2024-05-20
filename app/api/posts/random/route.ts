import prisma from "@/app/database";
import { NextResponse, NextRequest } from "next/server";

interface ApiResponse {
  message?: string;
  randomPosts?: ApiPostType[];
}

export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    let posts = await prisma.post.findMany({
      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });

    // shuffle algoritm
    const shuffleArray = (array: ApiPostType[] | any) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const randomPosts = shuffleArray(posts);

    return NextResponse.json({ randomPosts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch random posts." },
      { status: 500 }
    );
  }
}
