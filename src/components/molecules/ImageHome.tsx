import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Image from "next/image";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

type Props = {
  url1: string;
  url2: string;
  url3: string;
  url4: string;
  url5: string;
  caption: string;
  desc: string;
};

const ImageHome = (props: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textColor, setTextColor] = useState("text-white");
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slideImages = [
    {
      url: props.url1,
      caption: props.caption,
      desc: props.desc,
    },
    {
      url: props.url2,
      caption: props.caption,
      desc: props.desc,
    },
    {
      url: props.url3,
      caption: props.caption,
      desc: props.desc,
    },
    {
      url: props.url4,
      caption: props.caption,
      desc: props.desc,
    },
    {
      url: props.url5,
      caption: props.caption,
      desc: props.desc,
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout | null = null;

    if (isTypingFinished) {
      setTextColor(currentIndex === 0 ? "text-purple-600" : "text-white");

      timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex((currentIndex + 1) % slideImages.length);
        setIsTypingFinished(false);
      }, 5000);
    } else {
      interval = setInterval(() => {
        const nextText = slideImages[currentIndex].caption.slice(
          0,
          currentText.length + 1
        );
        setCurrentText(nextText);

        if (nextText === slideImages[currentIndex].caption) {
          setIsTypingFinished(true);
          if (interval) clearInterval(interval);
        }
      }, 200);

      setTextColor(currentIndex === 0 ? "text-purple-600" : "text-white");
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [isTypingFinished, currentIndex, slideImages, currentText]);

  useEffect(() => {
    if (currentText === slideImages[currentIndex].caption) {
      setIsTypingFinished(true);
    } else {
      setIsTypingFinished(false);
    }
  }, [currentText, currentIndex, slideImages]);

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
                  <h1
                    className={`md:text-5xl w-[22rem] absolute ml-20 mt-60 font-bold text-transition blinking-cursor ${textColor}`}
                  >
                    <span
                      className={`bg-clip-text ${
                        isTypingFinished ? "text-white" : ""
                      }`}
                      style={{ color: isTypingFinished ? "white" : "purple" }}
                    >
                      {currentText}
                    </span>
                  </h1>
                  <p className="w-2/6 md:w-[45%] text-white ml-20 mt-[23rem]">
                    {slideImage.desc}
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
