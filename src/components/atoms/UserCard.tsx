import { ImageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import React from "react";

type props = {
  username: string;
  address?: string;
  url: string;
  email: string;
  action: (e: React.MouseEvent) => void;
};

const UserCard = ({ username, address, url, email, action }: props) => {
  return (
    <div
      onClick={(e) => {
        action(e);
      }}
      className="flex flex-wrap p-2 items-center m-1 border-gray-600 border-2 cursor-pointer hover:scale-105"
    >
      {/* Read more about next/Image at https://nextjs.org/docs/api-reference/next/image */}
      <Image
        loader={ImageLoader}
        width={50}
        height={50}
        src={url}
        alt={username}
      />
      <div className="flex flex-col">
        <h3 className="font-bold">{username}</h3>
        <span className="inline-block">{address}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserCard;
