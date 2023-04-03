import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Image from "next/image";
import { NextPage } from "next";

type Props = {
  // url1?: string;
  // url2?: string;
  // url3?: string;
  // url4?: string;
  // url5?: string;
  // caption: string;
  // desc: string;
  children: React.ReactNode;
};

const ImageHome: NextPage<Props> = ({ children }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const slideImages = [
  //   {
  //     url: props.url1,
  //     caption: props.caption,
  //     desc: props.desc,
  //   },
  //   {
  //     url: props.url2,
  //     caption: props.caption,
  //     desc: props.desc,
  //   },
  //   {
  //     url: props.url3,
  //     caption: props.caption,
  //     desc: props.desc,
  //   },
  //   {
  //     url: props.url4,
  //     caption: props.caption,
  //     desc: props.desc,
  //   },
  //   {
  //     url: props.url5,
  //     caption: props.caption,
  //     desc: props.desc,
  //   },
  // ];

  return (
    <div className="slide-container  ">
      <Slide duration={3000}>{children}</Slide>
    </div>
  );
};

export default ImageHome;
