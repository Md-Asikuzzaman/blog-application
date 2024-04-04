import Posts from "@/components/shared/Posts";

// test cookie
import { cookies } from "next/headers";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import axios from "axios";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts", {
        baseURL: process.env.NEXTAUTH_URL,
      });
      return data as PostType;
    },
  });

  // test cookie
  const coookie = cookies().get("username");

  return (
    <div className="flex flex-col gap-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts coookie={coookie} />
      </HydrationBoundary>
    </div>
  );
}
