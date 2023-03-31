import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";
import { NextPage } from "next";

type props = {
  children: React.ReactNode;
};

const Article: NextPage<props> = ({ children }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-[#A03C78] px-[5%]">
        Artikel Sehjira Terbaru
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="w-[40%]">
          <h1 className="font-bold text-4xl text-[#A03C78]">
            Pelatihan Kemandirian Remaja Tuna Rungu Ke-5
          </h1>
          <p className="py-5 text-[#A03C78] ">
            OUTBOND DI LEBAK BULUS WISMA SLB PEMBINA JAKARTA, 19 - 20 JUNI 2010
          </p>
        </div>
        <div className=" hover:scale-110 transition duration-300">
          <Image
            src="/images/Container11.jpg"
            alt="sehjira"
            height={200}
            width={450}
          />
        </div>
      </div>
      <div className="px-[5%]">
        <h3 className="text-4xl text-[#A03C78] font-bold ">Artikel Lainnya</h3>
      </div>
      <div className="flex flex-wrap justify-between px-[5%] items-center p-5 gap-[5px]">
        {children}
      </div>
      <div className=" text-white mt-7 text-center text-[15px] font-extrabold ">
        <Button
          style=" py-2 px-9 bg-[#843C74] rounded border-[#843C74] hover:bg-white hover:text-[#843C74] transition  "
          title="Muat Lebih Banyak"
        />
      </div>
    </div>
  );
};

export default Article;
