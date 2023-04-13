import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Cards from "../atoms/Cards";
import { useRouter } from "next/router";
import { programType } from "@/types/ProgramType";
import Link from "next/link";

const responsiveSet = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToScroll: 4,
      slidesToShow: 3,
    },
  },
];

type Props = {
  program: programType[];
};

type props = Props;

const Glock = ({ program }: props) => {
  const router = useRouter();
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-5xl text-[#843C74] text-center">
          Program Unggulan Sehjira
        </h1>
      </div>
      <div className="slide-container">
        <Slide slidesToShow={1} slidesToScroll={2} responsive={responsiveSet}>
          {program.slice(0, 6).map((slideImage, index) => (
            <div key={index}>
              <Cards
                onClick={() =>
                  router.push(`/program-detail/${slideImage.attributes.slug}`)
                }
                image={
                  process.env.BASEURL +
                  slideImage.attributes.Image.data.attributes.url
                }
                caption={slideImage.attributes.Title}
              />
            </div>
          ))}
        </Slide>
        <div className=" text-[#843C74] mt-7 text-center text-[15px] font-extrabold transition  ">
          <Link href="/program">
            <Button
              style=" px-5 py-2 border-2 rounded border-[#843C74] hover:bg-[#843C74] hover:text-white transition "
              title="Lihat Semua Program Unggulan"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Glock;
