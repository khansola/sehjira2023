import React, { useState } from "react";
import CardRectangle from "../atoms/CardRectangle";
import Share from "../atoms/Share";
import { galeryType } from "@/types/Galerytype";

type Props = {
  galery: galeryType[];
};

type props = Props;

const Gallery = ({ galery }: props) => {
  const [zoomedIndex, setZoomedIndex] = useState<number | undefined>(undefined);

  const handleZoomIn = (index: number) => {
    setZoomedIndex(index);
  };

  const handleZoomOut = () => {
    setZoomedIndex(undefined);
  };

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      handleZoomOut();
    }
  };

  return (
    <div className="mt-16 px-[5%]">
      <div className="flex flex-wrap justify-center gap-16">
        <div className="flex items-start flex-col w-[83%]">
          <h1 className="text-[#843C74] text-6xl pb-5">Gallery Kami</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {galery.map((img, index) => {
          return (
            <div key={index} className="">
              <div
                onClick={() => handleZoomIn(index)}
                className="flex justify-center items-center"
              >
                <CardRectangle
                  image={
                    process.env.BASEURL +
                    img.attributes.image.data.attributes.url
                  }
                >
                  <Share />
                </CardRectangle>
              </div>
              {zoomedIndex === index && (
                <div className="fixed flex-col items-start top-0 left-0 w-full h-full flex justify-center  ">
                  <div
                    className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50"
                    onClick={handleOverlayClick}
                  ></div>
                  <div className="absolute top-0 right-0 m-4 z-30">
                    <button
                      className="text-white text-2xl font-bold focus:outline-none"
                      onClick={handleZoomOut}
                    >
                      X
                    </button>
                  </div>
                  <img
                    src={
                      process.env.BASEURL +
                      img.attributes.image.data.attributes.url
                    }
                    alt="Zoomed"
                    className="z-30 transform w-[100%] h-[500px] rounded-[55px] p-5 object-cover "
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
