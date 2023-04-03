import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import Galery from "@/components/molecules/Article1";
import Article1 from "@/components/molecules/Galery";
import Glock from "@/components/molecules/Glock";
import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";
import CardRectangle from "@/components/atoms/CardRectangle";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Cards from "@/components/atoms/Cards";

import { ImageSlider } from "@/components/molecules/Section";
import Button from "@/components/atoms/Button";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

// type data = {
//   data: {
//     id: number;
//     attributes: {
//       createdAt: string;
//       updatedAt: string;
//       publishedAt: string;
//       caption: string;
//       desc: string;
//       slide_banner: {
//         data: [
//           {
//             id: number;
//             attributes: {
//               name: string;
//               alternativeText: string;
//               caption: string;
//               width: number;
//               height: number;
//               hash: string;
//               ext: string;
//               mime: string;
//               size: number;
//               url: string;
//               previewUrl: null;
//               provider: string;
//               provider_metadata: null;
//               createdAt: string;
//               updatedAt: string;
//             };
//           }
//         ];
//       };
//       slide_visi_misi: {
//         data: [
//           {
//             id: number;
//             attributes: {
//               name: string;
//               alternativeText: string;
//               caption: string;
//               width: number;
//               height: number;
//               hash: string;
//               ext: string;
//               mime: string;
//               size: number;
//               url: string;
//               previewUrl: null;
//               provider: string;
//               provider_metadata: null;
//               createdAt: string;
//               updatedAt: string;
//             };
//           }
//         ];
//       };
//     };
//   };
// };

// type program = {

// }

// type slide_visi_misi = {
//   slide_visi_misi: {
//     data: [
//       {
//         id: 8;
//         attributes: {
//           name: "Rectangle 228.png";
//           alternativeText: "";
//           caption: "";
//           width: 600;
//           height: 400;
//           hash: "Rectangle_228_6ec3d22869";
//           ext: ".png";
//           mime: "image/png";
//           size: 17.88;
//           url: "/uploads/Rectangle_228_6ec3d22869.png";
//           previewUrl: null;
//           provider: "local";
//           provider_metadata: null;
//           createdAt: "2023-03-30T07:54:08.232Z";
//           updatedAt: "2023-03-30T10:45:07.932Z";
//         };
//       }
//     ];
//   };
// };

const index = (props: any) => {
  const { data, galery, article, program } = props;
  // console.log(program.data);

  console.log(data);

  return (
    <BlankTemplate>
      <ImageHome>
        {data.data.attributes.slide_banner.data.map(
          (slideImage: any, index: any) => (
            <div className="hover:scale-95 transition duration-500" key={index}>
              <div
                className="
            flex 
            flex-col"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${
                    process.env.BASEURL + slideImage.attributes.url
                  })`,
                }}
              >
                <div className="flex flex-col ">
                  <div>
                    <h1
                      className={`md:text-5xl w-[22rem] ml-20 mt-60 font-bold text-transition text-white`}
                    >
                      {slideImage.attributes.alternativeText}
                    </h1>
                    <p className="w-2/6 md:w-[45%] text-white ml-20 mt-[23rem]">
                      {slideImage.attributes.caption}
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
          )
        )}
      </ImageHome>

      <Section>
        <ImageSlider
          image1={
            process.env.BASEURL +
            data.data.attributes.slide_visi_misi.data[0].attributes.url
          }
          image2={
            process.env.BASEURL +
            data.data.attributes.slide_visi_misi.data[1].attributes.url
          }
          image3={
            process.env.BASEURL +
            data.data.attributes.slide_visi_misi.data[2].attributes.url
          }
        />
      </Section>
      <Glock>
        {program.data.slice(0, 6).map((slideImage: any, index: any) => (
          <div key={index}>
            <Cards
              image={
                process.env.BASEURL +
                slideImage.attributes.Image.data[0].attributes.url
              }
              caption={slideImage.attributes.Title}
            />
          </div>
        ))}
      </Glock>

      <Article1>
        {galery.data[0].attributes.image.data.map((e: any, i: any) => {
          return (
            <CardRectangle
              key={i}
              image={process.env.BASEURL + e.attributes.url}
            ></CardRectangle>
          );
        })}
      </Article1>
      <Galery>
        {article.data.slice(0, 3).map((e: any, i: any) => {
          return (
            <div className="hover:scale-110 transition duration-500 " key={i}>
              <div className="flex flex-wrap justify-center mt-10 ">
                <Card sx={{ maxWidth: 350, height: 450 }}>
                  <div className="w-[100%] flex flex-wrap justify-center  ">
                    <Image
                      src={
                        process.env.BASEURL +
                        e.attributes.Image.data.attributes.url
                      }
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
                      {e.attributes.Title}
                    </Typography>
                    <Typography
                      className="text-justify"
                      gutterBottom
                      component="div"
                    >
                      {e.attributes.Excerpt}
                    </Typography>
                    <Typography
                      className="text-left"
                      gutterBottom
                      component="div"
                    >
                      {e.attributes.createdAt}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </Galery>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get("/api/homepage?populate=*");
  const galery = await api.get("/api/galleries?populate=*");
  const program = await api.get("/api/programs?populate=*");
  const article = await api.get("/api/articles?populate=*");
  // console.log(res.data);

  return {
    props: {
      data: res.data,
      galery: galery.data,
      program: program.data,
      article: article.data,
    },
  };
};
