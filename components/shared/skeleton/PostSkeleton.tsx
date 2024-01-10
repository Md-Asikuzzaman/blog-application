import React from 'react';

const PostSkeleton = () => {
  return (
    <div className='rounded-md p-4 w-full bg-white'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-lg bg-gray-400 h-48 w-48'></div>
        <div className='flex-1 space-y-5 py-1'>
          <div className='h-3 w-40 bg-gray-400 rounded'></div>
          <div className='h-4 bg-gray-400 rounded'></div>
          <div className='flex gap-4'>
            <div className='h-3 w-12 bg-gray-400 rounded '></div>
            <div className='h-3 w-12 bg-gray-400 rounded '></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
