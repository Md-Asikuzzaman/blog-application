import { NextPage } from 'next';
import CategoryList from './CategoryList';

interface Props {}

const Category: NextPage<Props> = ({}) => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <h4 className='text-lg font-semibold text-black mb-3'>Categories</h4>
      <ul className='flex flex-col gap-2'>
        <CategoryList title='Food' total={43} />
        <CategoryList title='Food' total={43} />
        <CategoryList title='Shoe' total={43} />
        <CategoryList title='Food' total={43} />
        <CategoryList title='Food' total={43} />
      </ul>
    </div>
  );
};

export default Category;
