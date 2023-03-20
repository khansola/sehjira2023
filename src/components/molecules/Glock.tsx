import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Cards from "../atoms/Cards";

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
      slidesToScroll: 1,
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

const Glock = () => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-[50px] text-[#843C74] text-center mt-10">
          Program Unggulan Sehjira
        </h1>
      </div>
      <div className="slide-container">
        <Slide slidesToShow={1} slidesToScroll={2} responsive={responsiveSet}>
          {List.map((slideImage, index) => (
            <div key={index}>
              <Cards image={slideImage.image} caption={slideImage.caption} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Glock;
