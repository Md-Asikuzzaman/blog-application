import React from 'react';
import TagsList from './TagsList';

const Tags = () => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <h4 className='text-lg font-semibold text-black mb-3'>Tags</h4>

      <div className='flex flex-wrap gap-2'>
        <TagsList tagName='food' />
        <TagsList tagName='music' />
        <TagsList tagName='food' />
        <TagsList tagName='food' />
        <TagsList tagName='Business' />
        <TagsList tagName='food' />
        <TagsList tagName='food' />
        <TagsList tagName='E-commerce' />
        <TagsList tagName='food' />
        <TagsList tagName='food' />
      </div>
    </div>
  );
};

export default Tags;
