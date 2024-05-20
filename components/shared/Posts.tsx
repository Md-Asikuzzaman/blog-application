"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import Post from "./post/Post";
import PostSkeleton from "./skeleton/PostSkeleton";
import {
  usePageCountStore,
  useSearchStore,
  useTagActiveStore,
} from "@/lib/store";
import { useSearchParams } from "next/navigation";

const Posts = () => {
  const searchParams = useSearchParams();

  const searchID = searchParams.get("tagID");

  const { setTagId } = useTagActiveStore();

  useEffect(() => {
    searchID && setTagId(searchID);
  }, [searchID, setTagId]);

  const { data: postsBytag, isLoading: loading } = useQuery<ApiPostType[]>({
    queryKey: ["mytags", searchID],
    queryFn: async () => {
      const { data } = await axios.post(`/api/tags/${searchID}`, {
        baseURL: process.env.NEXTAUTH_URL,
      });
      return data.selectedTag.posts;
    },

    enabled: searchID ? true : false,
  });

  const search = useSearchStore((state) => state.search);

  const { currentPage, incCurrentPageCount, decCurrentPageCount } =
    usePageCountStore((state) => state);

  const { data: posts, isLoading } = useQuery<ApiPostType[]>({
    queryKey: ["postss", searchID],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts", {
        baseURL: process.env.NEXTAUTH_URL,
      });
      return data.posts;
    },

    enabled: !searchID ? true : false,
  });

  console.log(postsBytag);

  // FILTER POSTS BY SEARCH
  const filteredPosts = postsBytag
    ? postsBytag &&
      postsBytag.filter((post) => {
        return (
          post.title.toLowerCase().includes(search.toLowerCase().trim()) ||
          post.title.toLowerCase().includes(search.toLowerCase().trim())
        );
      })
    : posts &&
      posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(search.toLowerCase().trim()) ||
          post.title.toLowerCase().includes(search.toLowerCase().trim())
        );
      });

  // PAGINATION LOGIC
  const postPerPage = 3;
  const totalPage =
    filteredPosts && Math.ceil(filteredPosts?.length / postPerPage);

  const lastIndexPost = postPerPage * currentPage;
  const firstIndexPost = lastIndexPost - postPerPage;

  const sortedPosts = filteredPosts?.slice(firstIndexPost, lastIndexPost);

  const handlePageDec = () => {
    decCurrentPageCount();
  };

  if (isLoading || loading) {
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

      {loading && "Loading..."}

      <div>
        <button
          disabled={currentPage === 1}
          onClick={handlePageDec}
          className="bg-green-500 text-white py-2 px-5 m-2 rounded-full"
        >
          Previous
        </button>
        {totalPage}/{currentPage}
        <button
          disabled={filteredPosts && lastIndexPost >= filteredPosts?.length}
          onClick={incCurrentPageCount}
          className="bg-green-500 text-white py-2 px-5 m-2 rounded-full"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Posts;
