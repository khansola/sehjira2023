import React from "react";
import Button from "../atoms/Button";
import CardRectangle from "../atoms/CardRectangle";
import Share from "../atoms/Share";

const Galery = () => {
  const Rectangle = [
    {
      id: 1,
      image: "/images/Card.jpg",
    },
    {
      id: 2,
      image: "/images/Card.jpg",
    },
    {
      id: 3,
      image: "/images/Card.jpg",
    },
    {
      id: 4,
      image: "/images/Card.jpg",
    },
    {
      id: 5,
      image: "/images/Card.jpg",
    },
    {
      id: 6,
      image: "/images/Card.jpg",
    },
    {
      id: 7,
      image: "/images/Card.jpg",
    },
    {
      id: 8,
      image: "/images/Card.jpg",
    },
    {
      id: 9,
      image: "/images/Card.jpg",
    },
  ];
  return (
    <div className="mt-16 px-[5%]">
      <div className=" flex flex-wrap justify-center gap-16">
        <div className=" flex items-start flex-col w-[83%]">
          <h1 className="text-[#843C74] text-6xl pb-5">Galery Kami</h1>
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
        {Rectangle.map((e, i) => {
          return (
            <CardRectangle key={i} image={e.image}>
              <Share />
            </CardRectangle>
          );
        })}
      </div>
      <div className=" text-white mt-7 text-center text-[15px] font-extrabold ">
        <Button
          style=" py-2 px-9 bg-[#843C74] rounded border-[#843C74]  "
          title="Muat Lebih Banyak"
        />
      </div>
    </div>
  );
};

export default Galery;
