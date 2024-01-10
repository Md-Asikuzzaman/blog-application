'use client';

import Post from '@/components/shared/post/Post';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default async function Home() {
  // const res = await fetch('http://localhost:3000/api/posts', {
  //   cache: 'no-cache',
  // });
  // const posts: PostType[] = await res.json();

  const { data } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await axios.get('/api/posts');
      return res.data;
    },
  });

  console.log(data);

  return (
    <div className='flex flex-col gap-8'>
      {data?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
