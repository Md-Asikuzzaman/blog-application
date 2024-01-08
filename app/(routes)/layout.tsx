import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Category from '@/components/shared/category/Category';
import Popular from '@/components/shared/popular/Popular';
import Random from '@/components/shared/random/Random';
import Tags from '@/components/shared/tags/Tags';
import { Button } from '@/components/ui/button';
import { NextPage } from 'next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <div className='wrapper flex justify-between gap-5'>
          {/* LEFT SECTION */}
          <div className='max-w-[300px] w-full flex flex-col gap-8'>
            <Category />
            <Random />
          </div>

          {/* MIDDLE SECTION */}
          <div className='bg-white flex-1'>{children}</div>

          {/* RIGHT SECTION */}
          <div className='max-w-[300px] w-full flex flex-col gap-8'>
            <Popular />
            <Tags />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
