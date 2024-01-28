import moment from 'moment';
import { NextPage } from 'next';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import { LuClock10 } from 'react-icons/lu';

interface Props {
  post: PostType;
}

const PostDetails: NextPage<Props> = ({
  post: { title, description, image, author, createdAt },
}) => {
  return (
    <div className='bg-white p-5 rounded-md'>
      <div className='flex flex-col gap-3 mb-5'>
        <h2 className='text-2xl font-medium'>{title}</h2>

        <div className='flex items-center gap-3 mt-3'>
          <span className='inline-flex items-center gap-1 text-gray-500 text-md'>
            <FaRegUserCircle size={18} /> {author}
          </span>

          <span className='inline-flex items-center gap-1 text-gray-500 text-md'>
            <LuClock10 size={18} /> {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='relative w-full h-72 overflow-hidden rounded-md'>
          <Image
            src={image}
            fill
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100vw'
            alt='img'
          />
        </div>

        <div className='flex flex-col gap-5'>
          <p className='text-lg'>{description}</p>

          <p className='text-lg'>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc.
          </p>

          <p className='text-lg'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
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
