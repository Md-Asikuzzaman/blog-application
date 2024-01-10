'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Input } from '../ui/input';
import { useSearchStore } from '@/lib/store';

const Header = () => {
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);
  
  return (
    <header className='bg-white'>
      <div className='wrapper flex items-center justify-between gap-5'>
        <Link href={'/'}>
          <Image
            src={'/assets/images/logo.png'}
            height={70}
            width={140}
            alt='logo'
          />
        </Link>

        <div className='max-w-lg w-full'>
          <Input
            type='search'
            placeholder='Search by title'
            className='py-5'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
