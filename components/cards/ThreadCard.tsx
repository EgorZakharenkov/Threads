import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  id: string;
  content: string;
  currentUserId: string;
  parentId: string | null;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    name: string;
    image: string;
    id: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: Boolean;
}
function ThreadCard({
  id,
  content,
  currentUserId,
  parentId,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) {
  return (
    <article
      className={`flex w-full flex-col rounded-xl  p-7 ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2"
      } `}
    >
      <div className="flex items-start justify-between ">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="author-image"
                fill={true}
                className="cursor-pointer rounded-full object-cover"
              />
            </Link>
            <div className="thread-card_bar"></div>
          </div>
          <div className="flex flex-col w-full">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{content}</p>
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-3.5">
                <Image
                  width={24}
                  height={24}
                  src="/assets/heart-gray.svg"
                  alt="heart-gray"
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    width={24}
                    height={24}
                    src="/assets/reply.svg"
                    alt="heart-gray"
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  width={24}
                  height={24}
                  src="/assets/repost.svg"
                  alt="heart-gray"
                  className="cursor-pointer object-contain"
                />
                <Image
                  width={24}
                  height={24}
                  src="/assets/share.svg"
                  alt="heart-gray"
                  className="cursor-pointer object-contain"
                />
              </div>
              {comments.length > 0 ? (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} replies
                  </p>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ThreadCard;
