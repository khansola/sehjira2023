import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RelatedArticle: NextPage<Props> = ({ children }) => {
  // const ProgramList = [
  //   {
  //     image: "/images/lihatjuga1.png",
  //     caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
  //     title: "31 January 2030",
  //   },
  //   {
  //     image: "/images/lihatjuga2.png",
  //     caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
  //     title: "31 January 2030",
  //   },
  //   {
  //     image: "/images/lihatjuga3.png",
  //     caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
  //     title: "31 January 2030",
  //   },
  // ];

  return (
    <div>
      <div className="text-[#843C74] text-4xl font-bold px-[7%] mt-9">
        Lihat Juga
      </div>
      <div className="">
        <div className="flex flex-wrap gap-2 py-5 justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticle;
