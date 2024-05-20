import React from "react";
import TagsList from "./TagsList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface QueryResponse {
  tags: TagType[];
}

const Tags = () => {
  const { data, isLoading } = useQuery<QueryResponse>({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await axios.get("/api/tags");
      return data;
    },
  });

  return (
    <div className="bg-white p-5 rounded-md">
      <h4 className="text-lg font-semibold text-black mb-3">Tags</h4>

      <div className="flex flex-wrap gap-2">
        {isLoading
          ? "Loading..."
          : data?.tags?.map((tag) => <TagsList key={tag.id} tag={tag} />)}
      </div>
    </div>
  );
};

export default Tags;
