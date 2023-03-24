import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

const slideImages = [
  {
    url: "/images/image-home1.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/image-home2.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },

];

const ImageHome = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slideImages[0].caption.length;
      setCurrentIndex(nextIndex);
      setCurrentText(slideImages[0].caption.slice(0, nextIndex + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slide-container  ">
      <Slide duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div className="hover:scale-95 transition duration-500" key={index}>
            <div
              className="
            flex 
            flex-col"
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className="flex flex-col ">
                <div>
                  <h1 className="md:text-5xl w-[22rem] bg-red-400 absolute text-white bg-clip-text text-transparent ml-20 mt-60 blinking-cursor font-bold" >
                    {currentText}
                  </h1>
                  <p className="w-2/6 md:w-[45%] text-white ml-20 mt-[23rem]">{slideImage.desc}</p>
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
