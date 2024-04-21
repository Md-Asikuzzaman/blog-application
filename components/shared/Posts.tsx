"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import Post from "./post/Post";
import PostSkeleton from "./skeleton/PostSkeleton";
import { usePageCountStore, useSearchStore } from "@/lib/store";

const Posts = ({ coookie }: { coookie: any }) => {
  // test cookie
  console.log("value from cookie: " + coookie?.name + ": " + coookie?.value);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("username", "asik");
      let username = localStorage.getItem("username");

      console.log("value from local storage: " + username);
    }
  }, []);

  const search = useSearchStore((state) => state.search);
  const { currentPage, incCurrentPageCount, decCurrentPageCount } =
    usePageCountStore((state) => state);

  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts", {
        baseURL: process.env.NEXTAUTH_URL,
        headers: {
          Authorization: `Bearer ${coookie?.value}`,
        },
      });
      return data;
    },
  });

  // FILTER POSTS BY SEARCH
  const filteredPosts = posts?.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase().trim()) ||
      post.title.toLowerCase().includes(search.toLowerCase().trim())
    );
  });

  // PAGINATION LOGIC
  const postPerPage = 3;
  const totalPostPage =
    filteredPosts && Math.ceil(filteredPosts?.length / postPerPage);

  const lastIndexPost = postPerPage * currentPage;
  const firstIndexPost = lastIndexPost - postPerPage;

  const sortedPosts = filteredPosts?.slice(firstIndexPost, lastIndexPost);

  const handlePageDec = () => {
    decCurrentPageCount();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        {[1, 2, 3, 4].map((_, i) => (
          <PostSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (filteredPosts?.length === 0) {
    return (
      <div className="rounded-md p-5 w-full bg-white">
        <h3 className="text-xl text-center">No Post Found!!!</h3>
        <h3 className="text-xl text-center text-green-600 mt-3">"{search}"</h3>
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
          disabled={currentPage === 1}
          onClick={handlePageDec}
          className="bg-green-500 text-white py-2 px-5 m-2 rounded-full"
        >
          Previous
        </button>
        {totalPostPage}/{currentPage}
        <button
          disabled={filteredPosts && lastIndexPost >= filteredPosts?.length}
          onClick={() => incCurrentPageCount()}
          className="bg-green-500 text-white py-2 px-5 m-2 rounded-full"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Posts;
