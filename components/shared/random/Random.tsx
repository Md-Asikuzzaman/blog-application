import React from "react";
import RandomList from "./RandomList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Random = () => {
  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ["random"],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts/random");
      return data;
    },
  });

  return (
    <div className="bg-white p-5 rounded-md">
      <h4 className="text-lg font-semibold text-black mb-3">Random Posts</h4>

      <div className="flex flex-col gap-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {posts?.splice(0, 5)?.map((post) => (
              <RandomList
                key={post.id}
                photo={post.image}
                title={post.title}
                date={post.createdAt}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Random;
