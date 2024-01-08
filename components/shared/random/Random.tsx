import React from 'react';
import RandomList from './RandomList';

const Random = () => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <h4 className='text-lg font-semibold text-black mb-3'>Random Posts</h4>

      <div className='flex flex-col gap-5'>
        <RandomList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='March 17, 2023'
        />

        <RandomList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='Jan 17, 2024'
        />

        <RandomList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='Aught 17, 2023'
        />
      </div>
    </div>
  );
};

export default Random;
