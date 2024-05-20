import { NextPage } from "next";
import PostDetails from "@/components/shared/post_details/PostDetails";
import SuggestPosts from "@/components/shared/post_details/SuggestPosts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post-details", id],
    queryFn: async () => {
      const { data, status, headers } = await axios.get(`/api/posts/${id}`, {
        baseURL: process.env.NEXTAUTH_URL,
      });

      return data as ApiPostType;
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostDetails id={id} />
      </HydrationBoundary>
      <SuggestPosts />
    </div>
  );
};

export default Page;
