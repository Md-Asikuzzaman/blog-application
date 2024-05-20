import moment from "moment";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { LuClock10 } from "react-icons/lu";

interface Props {
  post: ApiPostType;
}

const RandomList: NextPage<Props> = ({ post }) => {
  const { id, title, image, createdAt } = post;

  return (
    <div className="flex items-center gap-3">
      <Image
        className="rounded-md"
        src={"/assets/images/pc.jpg"}
        height={70}
        width={90}
        alt="img"
      />

      <div>
        <Link
          className="hover:text-green-600 transition-colors"
          href={`/post/${id}`}
        >
          <h4 className="leading-5 text-base font-medi">{title}</h4>
        </Link>
        <span className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          <LuClock10 size={18} /> {moment(createdAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default RandomList;
