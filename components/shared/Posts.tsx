'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Post from './post/Post';
import PostSkeleton from './skeleton/PostSkeleton';
import { usePageCountStore, useSearchStore } from '@/lib/store';

const Posts = () => {
  const search = useSearchStore((state) => state.search);
  const { currentPage, incCurrentPageCount, decCurrentPageCount } =
    usePageCountStore((state) => state);

  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/api/posts');
      return data;
    },
  });

  // FILTER POSTS BY SEARCH
  const filteredPosts = posts?.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase().trim()) ||
      post.author.toLowerCase().includes(search.toLowerCase().trim())
    );
  });

  // PAGINATION LOGIC
  const postPerPage = 3;

  const lastIndexPost = postPerPage * currentPage;
  const firstIndexPost = lastIndexPost - postPerPage;

  const sortedPosts = filteredPosts?.slice(firstIndexPost, lastIndexPost);

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
      <div className='rounded-md p-5 w-full bg-white'>
        <h3 className='text-xl text-center'>No Post Found!!!</h3>
        <h3 className='text-xl text-center text-green-600 mt-3'>"{search}"</h3>
      </div>
    );
  }

  return (
    <>
      {sortedPosts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      <div>
        <button
          disabled={currentPage == 1}
          onClick={() => decCurrentPageCount()}
          className='bg-green-500 py-3 px-8 m-2 rounded-lg'
        >
          Previous
        </button>
        <button
          disabled={posts && lastIndexPost >= posts?.length}
          onClick={() => incCurrentPageCount()}
          className='bg-green-500 py-3 px-8 m-2 rounded-lg'
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Posts;
