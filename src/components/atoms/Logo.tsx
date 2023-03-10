import React from "react";
import Image from "next/image";

type logo = {
  image: string;
};

type Props = logo;

const Logo = (props: Props) => {
  return (
    <div className="">
      <div className="h-40 shadow-md">
        <Image alt="logo" src={props.image} width={208} height={200} />
      </div>
    </div>
  );
};

export default Logo;
