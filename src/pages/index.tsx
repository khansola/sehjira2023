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

const index = (props: any) => {
  const { data, galery, article, program } = props;
  // console.log(galery.data[0].attributes.image.data);
  console.log(program.data);
  // console.log(article.data);
  // console.log(program);
  // console.log(data.data.attributes.slide_visi_misi.data[0].attributes.url);
  // console.log(data.data.attributes.slide_banner.data[1].attributes.url);
  // console.log(data);

  return (
    <BlankTemplate>
      <ImageHome
        url1={
          process.env.BASEURL +
          data.data.attributes.slide_banner.data[0].attributes.url
        }
        url2={
          process.env.BASEURL +
          data.data.attributes.slide_banner.data[1].attributes.url
        }
        url3={
          process.env.BASEURL +
          data.data.attributes.slide_banner.data[2].attributes.url
        }
        url4={
          process.env.BASEURL +
          data.data.attributes.slide_banner.data[3].attributes.url
        }
        url5={
          process.env.BASEURL +
          data.data.attributes.slide_banner.data[4].attributes.url
        }
        caption={data.data.attributes.caption}
        desc={data.data.attributes.desc}
      />

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
      {/* <ProgramList /> */}

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
