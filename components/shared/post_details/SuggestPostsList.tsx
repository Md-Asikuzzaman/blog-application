import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { LuClock10 } from 'react-icons/lu';

interface Props {
  photo: string;
  title: string;
  date: string;
}

const RandomList: NextPage<Props> = ({ photo, title, date }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='relative h-28 w-full'>
        <Image
          className='rounded-md transform transition-transform hover:scale-105'
          src={photo}
          fill
          alt='img'
        />
      </div>

      <div>
        <Link className='hover:text-green-600 transition-colors' href='/'>
          <h4 className='leading-5 text-base font-medium'>{title}</h4>
        </Link>
        <span className='text-sm text-gray-500 flex items-center gap-1 mt-1'>
          <LuClock10 size={18} /> {date}
        </span>
      </div>
    </div>
  );
};

export default RandomList;
