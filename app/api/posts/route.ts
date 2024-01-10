import prisma from '@/app/database';
import { createPostSchema } from '@/schema/post';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  try {
    const data = await prisma.post.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch data.' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PostType;

    const validation = createPostSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 500 });
    }

    // CREATE NEW POST
    const newPost = await prisma.post.create({
      data: body,
    });

    return NextResponse.json({ newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create data' },
      { status: 500 }
    );
  }
}
