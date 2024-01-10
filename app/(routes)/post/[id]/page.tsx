import prisma from '@/app/database';
import PostDetails from '@/components/shared/post_details/PostDetails';
import SuggestPosts from '@/components/shared/post_details/SuggestPosts';
import { NextPage } from 'next';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { id } = params;

  const post = (await prisma.post.findUnique({
    where: { id },
  })) as PostType;

  return (
    <div className='flex flex-col gap-8'>
      <PostDetails post={post} />
      <SuggestPosts />
    </div>
  );
};

export default Page;
