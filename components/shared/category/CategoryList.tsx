import { NextPage } from 'next';
import Link from 'next/link';
import { MdCategory } from 'react-icons/md';

interface Props {
  title: string;
  total: number;
}

const CategoryList: NextPage<Props> = ({ title, total }) => {
  return (
    <Link
      className='hover:text-green-600 transition-colors'
      href={'/category/34'}
    >
      <li className='flex items-center justify-between'>
        <div className='flex items-center gap-1 uppercase text-sm font-semibold'>
          <MdCategory className='text-green-600' size={18} />
          {title}
        </div>
        <span>({total})</span>
      </li>
    </Link>
  );
};

export default CategoryList;
