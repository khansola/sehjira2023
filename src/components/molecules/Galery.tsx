import React, { useEffect, useRef, useState } from "react";
import Button from "../atoms/Button";
import CardRectangle from "../atoms/CardRectangle";
import Link from "next/link";
import { galeryType } from "@/types/Galerytype";

type Props = {
  galery: galeryType[];
};

type props = Props;

const Galery = ({ galery }: props) => {
  const [zoomedIndex, setZoomedIndex] = useState<number | undefined>(undefined);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = (index: number) => {
    setZoomedIndex(index);
  };

  const handleZoomOut = (event: React.MouseEvent) => {
    event.stopPropagation();
    setZoomedIndex(undefined);
  };

  useEffect(() => {
    const handleClickOutside = (event: React.MouseEvent) => {
      if (backgroundRef.current && event.target === backgroundRef.current) {
        handleZoomOut(event);
      }
    };

    if (zoomedIndex !== undefined) {
      document.addEventListener("click", handleClickOutside as any);
    } else {
      document.removeEventListener("click", handleClickOutside as any);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside as any);
    };
  }, [zoomedIndex]);

  return (
    <div className="mt-16">
      <h1 className="text-[#843C74] text-5xl text-center mt-5">Galery Kami</h1>
      <div className=" flex flex-wrap justify-center gap-16 mt-5">
        {galery.slice(0, 3).map((e, i) => {
          return (
            <div key={i} onClick={() => handleZoomIn(i)}>
              <CardRectangle
                image={
                  process.env.BASEURL + e.attributes.image.data.attributes.url
                }
              ></CardRectangle>
              {zoomedIndex === i && (
                <div className="fixed flex-col items-start top-0 left-0 w-full h-full flex justify-center">
                  <div
                    ref={backgroundRef}
                    className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50"
                  ></div>
                  <div className="absolute top-0 right-0 m-4 z-30">
                    <button
                      type="button"
                      className="text-white text-2xl font-bold focus:outline-none"
                      onClick={handleZoomOut}
                    >
                      X
                    </button>
                  </div>
                  <img
                    src={
                      process.env.BASEURL +
                      e.attributes.image.data.attributes.url
                    }
                    alt="Zoomed"
                    className="z-30 transform w-[100%] h-[500px] rounded-[55px] p-5 object-cover"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className=" text-[#843C74] mt-7 text-center text-[15px] font-extrabold transition ">
        <Link href="/galery">
          <Button
            style=" px-5 border-2 rounded border-[#843C74] hover:bg-[#843C74] hover:text-white transition  "
            title="Lihat Selengkapnya"
          />
        </Link>
      </div>
    </div>
  );
};

export default Galery;
