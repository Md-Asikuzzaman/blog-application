import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuClock10 } from 'react-icons/lu';
import { MdCategory } from 'react-icons/md';

const Post = () => {
  return (
    <div className='bg-white p-4 rounded-md flex gap-3'>
      <div className='relative h-[180px] w-[180px] rounded-lg overflow-hidden shrink-0'>
        <Image
          src={'/assets/images/pc.jpg'}
          fill
          style={{ objectFit: 'cover' }}
          alt='img'
        />
      </div>

      <div>
        <Link href='/id'>
          <span className='inline-flex items-center gap-1 text-sm font-semibold uppercase mb-3 text-green-600'>
            <MdCategory size={18} />
            Food
          </span>
        </Link>

        <Link className='hover:text-green-600 transition-colors' href='/post/123'>
          <h2 className='text-xl font-medium'>
            After a Caribbean Hurricane, the Battle Is Where, or Even Whether,
            to Rebuild
          </h2>
        </Link>

        <span className='inline-flex items-center gap-1 text-gray-500 mt-3 text-sm'>
          <LuClock10 size={18} /> March 17, 2023
        </span>
      </div>
    </div>
  );
};

export default Post;
