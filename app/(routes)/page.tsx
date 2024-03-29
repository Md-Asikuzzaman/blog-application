import Posts from '@/components/shared/Posts';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/api/posts');
      return data as PostType;
    },
  });

  return (
    <div className='flex flex-col gap-8'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts />
      </HydrationBoundary>
    </div>
  );
}
