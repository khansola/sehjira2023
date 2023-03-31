import { NextPage } from "next";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Cards from "../atoms/Cards";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

const List = [
  {
    image: "/images/Container1.png",
    caption: "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA",
  },
  {
    image: "/images/Container2.png",
    caption: "Kelas Kursus Komputer tingkat dasar dan Mahir",
  },
  {
    image: "/images/Container3.png",
    caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL",
  },
  {
    image: "/images/Container4.png",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/Container5.png",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/Container6.png",
    caption: "Pelatiha kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/Container7.png",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/Container8.png",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
];

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

type props = {
  children: React.ReactNode;
};

const Glock: NextPage<props> = ({ children }) => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-5xl text-[#843C74] text-center">
          Program Unggulan Sehjira
        </h1>
      </div>
      <div className="slide-container">
        <Slide slidesToShow={1} slidesToScroll={2} responsive={responsiveSet}>
          {children}
          {/* {List.map((slideImage, index) => (
            <div key={index}>
              <Cards image={slideImage.image} caption={slideImage.caption} />
            </div>
          ))} */}
        </Slide>
        <div className=" text-[#843C74] mt-7 text-center text-[15px] font-extrabold transition  ">
          <Button
            style=" px-5 py-2 border-2 rounded border-[#843C74] hover:bg-[#843C74] hover:text-white transition "
            title="Lihat Semua Program Unggulan"
          />
        </div>
      </div>
    </div>
  );
};

export default Glock;
