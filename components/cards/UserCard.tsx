"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const UserCard = ({ id, name, username, imgUrl, personType }: Props) => {
  const router = useRouter();
  return (
    <article className="user-card">
      <div className="relative h-14 w-14">
        <Image
          src={imgUrl}
          alt="userAvatar"
          fill={true}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-1 text-ellipsis">
        <h4 className="text-base-semibold text-light-1">{name}</h4>
        <p className="text-small-medium text-gray-1">@{username}</p>
      </div>
      <Button
        onClick={() => router.push(`/profile/${id}`)}
        className="user-card_btn"
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
