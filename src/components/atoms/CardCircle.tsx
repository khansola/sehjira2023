import React from "react";
import Image from "next/image";
import { NextPage } from "next";

interface Card {
  image: string;
  caption?: string;
  title?: string;
  action?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

type Props = Card;

const CardCircle: NextPage<Props> = ({
  children,
  image,
  caption,
  title,
  action,
}) => {
  return (
    <div className="w-64 h-auto hover:scale-110 transition">
      <div className="pb-4">
        <Image
          src={image}
          alt="dasd"
          width={270}
          height={270}
          className="rounded-full"
        />
      </div>
      <div className="pb-2">
        <h3 className="text-3xl font-bold text-[#5D5A88] text-center">
          {title}
        </h3>
      </div>
      <p className="text-center font-medium text-[20px]">{caption}</p>
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default CardCircle;
