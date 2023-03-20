import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Button from "../atoms/Button";

const Article1 = () => {
  const ProgramList = [
    {
      image: "/images/lihatjuga1.png",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
      title: "31 January 2030",
    },
    {
      image: "/images/lihatjuga2.png",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
      title: "31 January 2030",
    },
    {
      image: "/images/lihatjuga3.png",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
      title: "31 January 2030",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-[#843C74] text-[50px] text-center mt-16 font-bold">
          Artikel Terbaru
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center ">
        {ProgramList.map((e, i) => {
          return (
            <div className="hover:scale-110 transition duration-500 " key={i}>
              <div className="flex flex-wrap justify-center mt-10 ">
                <Card sx={{ maxWidth: 350, height: 450 }}>
                  <div className="w-[100%] flex flex-wrap justify-center  ">
                    <Image
                      src={e.image}
                      alt={"vector.png"}
                      width={300}
                      height={160}
                    ></Image>
                  </div>
                  <CardContent className="hover:text-white hover:bg-[#843C74]">
                    <Typography
                      className="text-center"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {e.caption}
                    </Typography>
                    <Typography
                      className="text-justify"
                      gutterBottom
                      component="div"
                    >
                      {e.desc}
                    </Typography>
                    <Typography
                      className="text-left"
                      gutterBottom
                      component="div"
                    >
                      {e.title}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className=" text-[#843C74] mt-7 text-center text-[15px] font-extrabold ">
                <Button
                  style=" px-5 border-2 rounded border-[#843C74]  "
                  title="Lihat Selengkapnya"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article1;
