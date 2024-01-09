import { NextPage } from 'next';
import Image from 'next/image';
import { LuClock10 } from 'react-icons/lu';

interface Props {}

const PostDetails: NextPage<Props> = ({}) => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <div className='flex flex-col gap-3 mb-5'>
        <h2 className='text-2xl font-medium'>
          After a Caribbean Hurricane, the Battle Is Where, or Even Whether, to
          Rebuild
        </h2>

        <span className='text-md text-gray-500 inline-flex items-center gap-1'>
          <LuClock10 size={18} /> 12 march 2025
        </span>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='relative w-full h-72 overflow-hidden rounded-md'>
          <Image src={'/assets/images/pc.jpg'} fill alt='img' />
        </div>

        <div className='flex flex-col gap-5'>
          <p className='text-lg'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>

          <p className='text-lg'>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc.
          </p>

          <p className='text-lg'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
