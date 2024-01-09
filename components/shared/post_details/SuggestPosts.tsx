import { NextPage } from 'next';
import SuggestPostsList from './SuggestPostsList';

interface Props {}

const SuggestPosts: NextPage<Props> = ({}) => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <h4 className='text-lg font-semibold text-black mb-3'>
        You may like these posts
      </h4>

      <div className='flex gap-5'>
        <SuggestPostsList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='March 17, 2023'
        />

        <SuggestPostsList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='March 17, 2023'
        />

        <SuggestPostsList
          photo={'/assets/images/pc.jpg'}
          title='This is the test title ever.'
          date='March 17, 2023'
        />
      </div>
    </div>
  );
};

export default SuggestPosts;
