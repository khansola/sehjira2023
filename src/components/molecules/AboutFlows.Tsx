import React from "react";
import CardCircle from "../atoms/CardCircle";
import Share from "../atoms/Share";
import { NextPage } from "next";

type props = {
  children: React.ReactNode;
};

const AboutFlows: NextPage<props> = ({ children }) => {
  return (
    <div className="flex flex-wrap px-[7%] gap-5 justify-center md:justify-between">
      {children}
    </div>
  );
};

export default AboutFlows;
