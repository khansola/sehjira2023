import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";

import { slide_bannerType } from "@/types/Slide_BannerType";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

type Props = {
  banner: slide_bannerType[];
};

type props = Props;

const ImageHome = ({ banner }: props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        (currentIndex + 1) % banner[0].attributes.caption.length;
      setCurrentIndex(nextIndex);
      setCurrentText(banner[0].attributes.caption.slice(0, nextIndex + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slide-container  ">
      <Slide duration={3000}>
        {banner.map((slideImage, index) => (
          <div className="hover:scale-95 transition duration-500" key={index}>
            <div
              className="
            flex 
            flex-col"
              style={{
                ...divStyle,
                backgroundImage: `url(${
                  process.env.BASEURL +
                  slideImage.attributes.image.data.attributes.url
                })`,
              }}
            >
              <div className="flex flex-col ">
                <div>
                  <h1 className=" md:text-5xl w-[22rem] absolute ml-20 mt-60 font-bold text-transition blinking-cursor ">
                    {" "}
                    {currentText}{" "}
                  </h1>
                  <p className=" w-2/6 md:w-[45%] text-white ml-20 mt-[23rem]">
                    {slideImage.attributes.desc}
                  </p>
                </div>
                <div className=" self-start justify-self-start ml-[75px] mt-5 bg-white rounded-full flex flex-row px-8 py-6 gap-2 text-[#843C74] font-semibold hover:bg-[#843C74] hover:text-white transition hover:scale-110   ">
                  <Button
                    style=" items-center justify-center flex "
                    title="PELAJARI LEBIH LANJUT"
                  />
                  <span className="text-[20px] items-center flex">🡪</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageHome;
