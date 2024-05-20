import Posts from "@/components/shared/Posts";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts", {
        baseURL: process.env.NEXTAUTH_URL,
      });
      return data as ClientPostType[];
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<span>loading...</span>}>
          <Posts />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
