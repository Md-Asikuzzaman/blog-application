"use client";

import { useTagActiveStore } from "@/lib/store";
import clsx from "clsx";
import { NextPage } from "next";
import Link from "next/link";

import { FaTags } from "react-icons/fa";

interface Props {
  tag: TagType;
}

const TagsList: NextPage<Props> = ({ tag }) => {
  const { title, id } = tag;
  const { tagId } = useTagActiveStore();

  return (
    <Link
      className={clsx(
        "bg-green-600/10 text-green-600 hover:bg-green-600 hover:text-white py-1 px-3 rounded-full transition-colors",

        tagId == id && "bg-green-600 text-white"
      )}
      href={`/?tagID=${id}`}
    >
      <span className="capitalize inline-flex items-center gap-1">
        <FaTags /> {title}
      </span>
    </Link>
  );
};

export default TagsList;
