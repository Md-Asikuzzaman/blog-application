'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Post from './post/Post';
import PostSkeleton from './skeleton/PostSkeleton';
import { useSearchStore } from '@/lib/store';

const Posts = () => {
  const search = useSearchStore((state) => state.search);

  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/api/posts');
      return data;
    },
  });

  const filteredPosts = posts?.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase().trim()) ||
      post.author.toLowerCase().includes(search.toLowerCase().trim())
    );
  });

  if (isLoading) {
    return (
      <div className='flex flex-col gap-8'>
        {[1, 2, 3, 4].map((_, i) => (
          <PostSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (filteredPosts?.length === 0) {
    return (
      <div className='rounded-md p-4 w-full bg-white'>
        <h2>No Post Found!!!</h2>
      </div>
    );
  }

  return (
    <>
      {filteredPosts?.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};

export default Posts;
