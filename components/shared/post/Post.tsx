import moment from "moment";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";
import { MdCategory } from "react-icons/md";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  authorId?: string | null;
  // categoriesId?: string[];
  // tagsId?: string[];
  author: AuthorType | null;
}

const Post: NextPage<Props> = ({
  id,
  title,
  image,
  createdAt,
  authorId,
  author,
}) => {
  return (
    <div className="bg-white p-4 rounded-md flex gap-3">
      <div className="relative h-48 w-48 rounded-lg overflow-hidden shrink-0">
        {/* <Image
          src={image}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100vw"
          alt="img"
          priority
        /> */}
      </div>

      <div>
        <Link href={`/category/=`}>
          <span className="inline-flex items-center gap-1 text-sm font-semibold uppercase mb-3 text-green-600">
            <MdCategory size={18} />
            {/* {category[0].title} */}
          </span>
        </Link>

        <Link
          className="hover:text-green-600 transition-colors"
          href={`/post/${id}`}
        >
          <h2 className="text-xl font-medium">{title}</h2>
        </Link>

        <div className="flex items-center gap-3 mt-3">
          <Link
            className="inline-flex"
            href={`/author/${author ? author?.id : "None"}`}
          >
            <span className="inline-flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors text-sm">
              <FaRegUserCircle size={18} /> {author ? author?.name : "Unknown"}
            </span>
          </Link>

          <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
            <LuClock10 size={18} /> {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
