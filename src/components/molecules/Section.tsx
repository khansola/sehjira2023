import React, { useState } from "react";
import Image from "next/image";

const List = [
  {
    image: "/images/Section.jpg",
  },
  {
    image: "/images/Container1.png",
  },
  {
    image: "/images/Container2.png",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
          &#8249;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-2xl font-bold focus:outline-none hover:text-gray-400"
          onClick={handleNextSlide}
        >
          &#8250;
        </button>
        <div className="w-[750px] h-[500px]  ">

        <Image
            src={List[currentSlide].image}
            alt="sehijra"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        {List.map((item, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-2 ${currentSlide === index ? "bg-[#843C74]" : "bg-gray-400"
              } focus:outline-none`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const section = () => {
  return (
    <>
      <h1 className="text-center mt-10 text-[50px] text-[#843C74] font-bold ">
        Visi Misi Sehjira
      </h1>
      <div className="flex flex-row  flex-wrap justify-evenly py-16 mr-10">
        <div>
          <ImageSlider />
        </div>
        <div className="w-[0.1rem]"></div>
        <div className="w-[17rem] flex justify-around  flex-col flex-wrap pr-5 text-justify pt-10">
          <div>
            <h3 className="p-5 text-[28px] font-bold text-[#843C74]">Visi</h3>
            <p className="text-[18px] font-normal ">
              pemberdayaaan disabilitas rungu/Tuli guna terwujudnya individu yang
              tangguh dan mandiri serta ikut berpartisipasi dalam pembangunan
              Indonesia inklusif.
            </p>
          </div>
          <div>
            <h3 className="p-5 text-[28px] font-bold text-[#843C74]">
              Misi
            </h3>
            <p className="text-[18px] font-normal ">
              Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau perlindungan terutama menjembatani penyandang disabilitas dengan organisasi kemitraan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default section;