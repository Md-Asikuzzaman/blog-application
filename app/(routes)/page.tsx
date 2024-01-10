import Post from '@/components/shared/post/Post';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-cache',
  });
  const posts: PostType[] = await res.json();

  return (
    <div className='flex flex-col gap-8'>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
