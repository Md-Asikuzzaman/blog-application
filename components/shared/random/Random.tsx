import React from "react";
import RandomList from "./RandomList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RandomPostSkeleton from "@/components/ui/RandomPostSkeleton";

const Random = () => {
  const { data: posts, isLoading } = useQuery<ApiPostType[]>({
    queryKey: ["random"],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts/random");
      return data.randomPosts;
    },
  });

  // console.log(posts);

  return (
    <div className="bg-white p-5 rounded-md">
      <h4 className="text-lg font-semibold text-black mb-3">Random Posts</h4>

      <div className="flex flex-col gap-5">
        {isLoading ? (
          <div className="flex flex-col gap-5">
            <RandomPostSkeleton />
            <RandomPostSkeleton />
            <RandomPostSkeleton />
            <RandomPostSkeleton />
            <RandomPostSkeleton />
          </div>
        ) : (
          <>
            {posts?.map((post) => (
              <RandomList key={post.id} post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Random;
