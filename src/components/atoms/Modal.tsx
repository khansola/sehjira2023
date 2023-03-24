import React, { useState } from "react";
import Image from "next/image";
import { NextPage } from "next";

type Props = {
  children?: React.ReactNode;
  close: string;
  image?: string;
};

const Modal = (props: Props) => {
  const [close, setClose] = useState<string>("block");

  const closed = () => {
    if (close === "block") {
      setClose("hidden");
    }
  };
  return (
    <div
      className={`w-auto z-40 overflow-auto ${
        props.close === "block" ? close : props.close
      }`}
      onClick={() => closed()}
    >
      <Image src="/images/c.jpg" alt="ss" width={1421} height={0} />
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;
