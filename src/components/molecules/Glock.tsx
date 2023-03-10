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
    image: "/images/f.jpg",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/f.jpg",
    caption: "Pelatiha kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/s.jpg",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/s.jpg",
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

const Glock = () => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-5xl text-[#843C74] text-center">
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
