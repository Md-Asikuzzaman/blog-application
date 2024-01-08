import { NextPage } from 'next';
import Link from 'next/link';
import { FaTags } from 'react-icons/fa';

interface Props {
  title: string;
  total: number;
}

const CategoryList: NextPage<Props> = ({ title, total }) => {
  return (
    <Link className='hover:text-green-600 transition-colors' href={'/category/34'}>
      <li className='flex items-center justify-between '>
        <div className='flex items-center gap-1 uppercase'>
          <FaTags className='text-green-600' size={18} />
          {title}
        </div>
        <span>({total})</span>
      </li>
    </Link>
  );
};

export default CategoryList;
