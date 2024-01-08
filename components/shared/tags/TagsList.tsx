import { NextPage } from 'next';
import Link from 'next/link';

import { FaTags } from 'react-icons/fa';


interface Props {
  tagName: string;
}

const TagsList: NextPage<Props> = ({ tagName }) => {
  return (
    <Link className="bg-green-600/10 text-green-600 hover:bg-green-600 hover:text-white py-1 px-3 rounded-full transition-colors" href={'/id'}>
      <span className="capitalize inline-flex items-center gap-1"><FaTags/> {tagName}</span>
    </Link>
  );
};

export default TagsList;
