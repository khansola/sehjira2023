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
                  <h1 className=" text-3xl md:text-5xl bg-gradient-to-r from-[#A03c78] to-purple-400 bg-clip-text text-transparent ml-20 mt-60 w-[53%] blinking-cursor font-extrabold ">
                    {" "}
                    {currentText}{" "}
                  </h1>
                  <p className=" mt-5 w-2/6 md:w-2/6 text-white ml-20">
                    {slideImage.attributes.desc}
                  </p>
                </div>
                <div className=" self-start justify-self-start bg-white rounded-full  ml-16 mt-5 h-14 flex border-black border-4 text-[#843C74] font-bold hover:bg-[#843C74] hover:text-white transition hover:scale-110   ">
                  <Button
                    style=" items-center justify-center flex "
                    title="PELAJARI LEBIH LANJUT"
                  />
                  <span className="pt-3 pl-3 text-[29px]">🡪</span>
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
