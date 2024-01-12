'use client';

import { NextPage } from 'next';
import PostDetails from '@/components/shared/post_details/PostDetails';
import SuggestPosts from '@/components/shared/post_details/SuggestPosts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = ({ params }) => {
  const { id } = params;

  const { data: post, isLoading } = useQuery<PostType | any>({
    queryKey: ['post'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/api/posts/${id}`);
      return data;
    },
  });

  console.log(post);

  return (
    <div className='flex flex-col gap-8'>
      {!isLoading && <PostDetails post={post} />}

      <SuggestPosts />
    </div>
  );
};

export default Page;
