import React from 'react';
import PopularList from './PopularList';

const Popular = () => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <h4 className='text-lg font-semibold text-black mb-3'>Popular Posts</h4>

      <div className='flex flex-col gap-5'>
        <PopularList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='March 17, 2023'
        />

        <PopularList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='Jan 17, 2024'
        />

        <PopularList
          photo={'/assets/images/pc.jpg'}
          title='After a Caribbean Hurricane'
          date='Aught 17, 2023'
        />
      </div>
    </div>
  );
};

export default Popular;
