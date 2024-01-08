import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
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
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
