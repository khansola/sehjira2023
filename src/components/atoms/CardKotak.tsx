import React from "react";
import Image from "next/image";

interface Card {
  image: string;
  caption: string;
  title: string;
  action?: (e: React.MouseEvent) => void;
}

type Props = Card;

const CardKotak = (props: Props) => {
  return (
    <div className="py-10">
      <div className="w-[22rem] hover:scale-110 transition rounded-[20px] shadow-[2px_6px_6px_rgba(0,0,0,0.25) ]">
        <Image
          className="rounded-t-[20px]"
          src={props.image}
          alt="da"
          width={364}
          height={252}
        />
        <div className="p-2">
          <h3 className="py-4 font-bold text-[28px]">{props.title}</h3>
          <p className="">
            {props.caption}
          </p>
          <div className="p-2 w-auto pt-4 ">
            <div className="h-14 flex justify-center items-center border-solid border-black border-[1px] rounded-md ">
              <div className="">
                <span className="font-semibold text-[#843C74] ">Readmore </span>
                <span className="rounded-full bg-[#843C74] text-[#FFFFFF] ">
                  ‎ 🡲 ‎
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKotak;