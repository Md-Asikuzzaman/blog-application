import Posts from '@/components/shared/Posts';

export default async function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <Posts />
    </div>
  );
}
