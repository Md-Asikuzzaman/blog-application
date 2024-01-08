import Category from '@/components/shared/category/Category';
import Random from '@/components/shared/random/Random';

export default function Home() {
  return (
    <>
      <section>
        <div className='wrapper flex justify-between gap-5'>
          {/* LEFT SECTION */}
          <div className='max-w-[300px] w-full flex flex-col gap-8'>
            <Category />
            <Random />
          </div>

          {/* MIDDLE SECTION */}
          <div className='bg-white flex-1'>
            <h1>test</h1>
          </div>

          {/* RIGHT SECTION */}
          <div className='bg-white max-w-[300px] w-full'>
            <h1>test</h1>
          </div>
        </div>
      </section>
    </>
  );
}
