import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";
import { NextPage } from "next";

type Props = {
  children: React.ReactNode;
  action?: () => void;
  action2?: () => void;
  title?: string;
  caption?: string;
  image: string;
  halaman: string;
};

const Program: NextPage<Props> = ({
  children,
  halaman,
  action,
  action2,
  title,
  caption,
  image,
}) => {
  return (
    <div>
      <h1 className="font-bold text-4xl px-[5%] text-[#A03C78]">{halaman}</h1>
      <div
        className="flex flex-wrap items-center justify-around"
        onClick={() => action2!()}
      >
        <div className="w-[40%]">
          <h1 className="font-bold text-4xl text-[#A03C78]">{title}</h1>
          <p className="py-5  ">{caption}</p>
        </div>
        <div className="hover:scale-110 transition duration-500">
          <Image src={image} alt="sehjira" height={200} width={450} />
        </div>
      </div>
      <div className="px-[5%]">
        <h3 className="text-4xl text-[#A03C78] font-bold ">
          Program Unggulan Lainnya
        </h3>
      </div>
      <div className="flex flex-wrap justify-between px-[5%] items-center py-5 gap-[5px] ">
        {children}
      </div>
      <div className=" text-white mt-7 text-center text-[15px] font-extrabold  ">
        <button
          onClick={() => action!()}
          className="py-2 px-9 bg-[#843C74] hover:bg-white hover:text-[#843C74] transition rounded border-[#843C74]"
        >
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
};

export default Program;
