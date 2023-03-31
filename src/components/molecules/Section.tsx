import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { NextPage } from "next";

type Props = {
  image1?: string;
  image2?: string;
  image3?: string;
  children?: React.ReactNode;
};

export const ImageSlider = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const List = [
    {
      image: props.image1,
    },
    {
      image: props.image2,
    },
    {
      image: props.image3,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? List.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === List.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-2xl font-bold focus:outline-none hover:text-gray-400"
          onClick={handlePrevSlide}
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-2xl font-bold focus:outline-none hover:text-gray-400"
          onClick={handleNextSlide}
        >
          <FaArrowAltCircleRight />
        </button>
        <div className="w-full">
          <Image
            src={List[currentSlide].image || ""}
            alt="sehijra"
            className="rounded-3xl object-cover aspect-video"
            width={750}
            height={500}
          />
        </div>
        <div className="flex justify-center mt-2.5rem">
          {List.map((item, index) => (
            <button
              key={index}
              className={`h-0.75rem w-0.75rem rounded-full mx-0.5rem ${
                currentSlide === index ? "bg-[#843C74]" : "bg-gray-400 "
              } focus:outline-none`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

const section: NextPage<Props> = ({ children }) => {
  return (
    <>
      <h1 className="text-center mt-10 text-[50px] text-[#843C74] font-bold ">
        Visi Misi Sehjira
      </h1>
      <div className="flex flex-row  flex-wrap justify-evenly py-16 mr-10">
        <div className="">{children}</div>
        <div className="w-[0.1rem]"></div>
        <div className="w-[17rem] flex justify-around  flex-col flex-wrap pr-5  ">
          <div>
            <h3 className="py-5 text-[2.8rem] font-bold text-[#843C74]">
              Visi
            </h3>
            <p className="text-[1.2rem] font-normal ">
              pemberdayaaan disabilitas rungu/Tuli guna terwujudnya individu
              yang tangguh dan mandiri serta ikut berpartisipasi dalam
              pembangunan Indonesia inklusif.
            </p>
          </div>
          <div>
            <h3 className="py-5 text-[2.8rem] font-bold text-[#843C74]">
              Misi
            </h3>
            <p className="text-[1.2rem] font-normal ">
              Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau
              perlindungan terutama menjembatani penyandang disabilitas dengan
              organisasi kemitraan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default section;
