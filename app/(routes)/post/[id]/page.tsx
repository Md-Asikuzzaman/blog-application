import PostDetails from '@/components/shared/post_details/PostDetails';
import SuggestPosts from '@/components/shared/post_details/SuggestPosts';

const page = () => {
  return (
    <div className='flex flex-col gap-8'>
      <PostDetails />
      <SuggestPosts />
    </div>
  );
};

export default page;
