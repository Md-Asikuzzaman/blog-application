import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Random = () => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <h4 className='text-lg font-semibold text-black mb-3'>Random Posts</h4>
      <div className='flex items-center gap-3'>
        <Image
          className='rounded-md'
          src={'/assets/images/pc.jpg'}
          height={70}
          width={90}
          alt='img'
        />

        <div>
          <Link className='hover:text-green-600 transition-colors' href='/'>
            <h4 className='leading-5 text-base font-semibold'>
              After a Caribbean Hurricane,
            </h4>
          </Link>
          <span className='text-sm text-gray-500'>March 17, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Random;
