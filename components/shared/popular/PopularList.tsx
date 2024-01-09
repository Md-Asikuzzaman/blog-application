import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LuClock10 } from 'react-icons/lu';

interface Props {
  photo: string;
  title: string;
  date: string;
}

const PopularList: NextPage<Props> = ({ photo, title, date }) => {
  return (
    <div className='flex items-center gap-3'>
      <Image
        className='rounded-md'
        src={photo}
        height={70}
        width={90}
        alt='img'
      />

      <div>
        <Link className='hover:text-green-600 transition-colors' href='/'>
          <h4 className='leading-5 text-base font-medi'>{title}</h4>
        </Link>
        <span className='text-sm text-gray-500 flex items-center gap-1 mt-1'>
          <LuClock10 size={18} /> {date}
        </span>
      </div>
    </div>
  );
};

export default PopularList;
