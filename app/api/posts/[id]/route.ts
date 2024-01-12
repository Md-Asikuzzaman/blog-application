import prisma from '@/app/database';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  // update logic...
  return NextResponse.json(post, { status: 200 });
}
