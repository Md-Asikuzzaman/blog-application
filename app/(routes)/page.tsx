import Post from '@/components/shared/post/Post';

export default function Home() {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
