import React from "react";
import Image from "next/image";
import { NextPage } from "next";

type visimisi = {
  image?: string;
  children?: React.ReactNode;
  title?: string;
  desc?: string;
  content?: string;
};

type Props = visimisi;

const VisiMisi: NextPage<Props> = ({
  image,
  children,
  title,
  desc,
  content,
}) => {
  return (
    <div className="flex justify-center flex-col items-start w-[70%]">
      <div>
        <div className="pt-6 pb-12 h-auto items-start">
          <h3 className="leading-[3rem] text-6xl font-bold text-[#1E1E1E]">
            {title}
          </h3>
        </div>
        <div>
          <p className="py-4">{content}</p>
        </div>
        <div className="">
          {image ? (
            <Image src={image} alt={"image"} height={570} width={1240} />
          ) : (
            <div></div>
          )}
        </div>
        <p className="font-normal text-center italic">{desc}</p>
      </div>

      <div>
        <div className="pt-2 pb-4">
          <ul className="pl-6 list-disc">{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
