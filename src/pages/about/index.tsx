import React, { useEffect, useState } from "react";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import About from "@/components/molecules/About";
import axios from "axios";

import VisiMisi from "@/components/atoms/VisiMisi";
import LogoSlider from "@/components/molecules/LogoSlider";
import TimSehijira from "@/components/molecules/TimSehijira";
import CardCircle from "@/components/atoms/CardCircle";

import { GetServerSideProps } from "next";

import ReactMarkdown from "react-markdown";
import { api } from "@/utils/api";

export type about = {
  id: number;
  attributes: {
    latar_belakang: string;
    visi: string;
    misi: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    lini_masa: [
      {
        list: string;
      }
    ];
  };
};

const Index = (props: any) => {
  // const [data, setData] = useState<about[]>([]);
  const { res, teams } = props;
  console.log(res);
  console.log(teams);

  console.log(res.attributes.latar_belakang);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/about-page?populate=*", {
  //       headers: {
  //         Authorization:
  //           "bearer 00533015bdbcb09e71f94ce80e58f4cafcd8582519b2918cb252691bd21c7fc4ffb8b25ba193228614766ddc6c21c049a21cfce2d195c14de427f86e9b0aa1e0cc699165f255dd33fcc3a5571e4d5b1cfffc1355d3040822b86a5c3da77c9509539df1754722b13f58bef9ed163feb74dc8a5b647b9b76e639c3c6888c2bfa47",
  //       },
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // }, []);

  return (
    <BlankTemplate>
      <About
        logo={<LogoSlider />}
        timSehijra={
          <TimSehijira>
            {teams.slice(0, 4).map((e: any, i: any) => {
              return (
                <CardCircle
                  key={i}
                  image={"/images/Image(1).png"}
                  caption={e.attributes.division}
                  title={`${
                    e.attributes.post_degree ? e.attributes.post_degree : ""
                  } ${e.attributes.title} ${
                    e.attributes.degree ? e.attributes.degree : ""
                  }`}
                ></CardCircle>
              );
            })}
          </TimSehijira>
        }
      >
        <VisiMisi
          // image={
          //   "http://127.0.0.1:1337" +
          //   res.attributes.image_banner.data.attributes.url
          // }
          image={
            process.env.BASEURL +
            res.attributes.image_banner.data[1].attributes.url
          }
          title="Tentang Sehjira"
          desc="Rachmita Harahap, Pendiri Yayasan Sehat Jiwa Raga tampil pada Metro TV acara Kick Andy"
        ></VisiMisi>
        <VisiMisi
          image={
            process.env.BASEURL +
            res.attributes.image_banner.data[0].attributes.url
          }
          title="Latar Belakang"
          content={res.attributes.latar_belakang}
        ></VisiMisi>
        <VisiMisi title="Linimasa Sehjira">
          <ReactMarkdown className="ReactMarkdown">
            {res.attributes.body}
          </ReactMarkdown>
        </VisiMisi>
        <div className="flex w-[70%] items-start">
          <VisiMisi title="Visi" content={res.attributes.visi}></VisiMisi>
          <VisiMisi title="Misi">
            <li>{res.attributes.misi}</li>
            {/* <li>
              Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau
              perlindungan terutama menjembatani penyandang disabilitas dengan
              organisasi kemitraan;
            </li>
            <li>
              Menjalin kerjasama antar lembaga misalnya lembaga pemerintah baik
              sektor sosial, pendidikan, kesehatan,  tenaga kerja, olah raga,
              seni budaya dan pariwisata, infrastruktur, dan sebagainya; dan
            </li>
            <li>
              Pemberdayaan disabilitas rungu/Tuli turut berpartisipasi dalam
              pembangunan dan memberikan sosialisasi kepada masyarakat umum
              mengenai ketulian.
            </li> */}
          </VisiMisi>
        </div>
        <VisiMisi
          title="Mitra Kerja Sama"
          content={res.attributes.Mitra_Kerja_Sama}
        ></VisiMisi>
      </About>
    </BlankTemplate>
  );
};

export default Index;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const res = await api.get("/api/about-page");
//   console.log(res.data);
// 	return {
// 		props: {
// 		},
// 	};
// };

export async function getServerSideProps() {
  const res = await axios.get(
    `http://127.0.0.1:1337/api/about-page?populate=*`,
    {
      headers: {
        Authorization:
          "bearer 00533015bdbcb09e71f94ce80e58f4cafcd8582519b2918cb252691bd21c7fc4ffb8b25ba193228614766ddc6c21c049a21cfce2d195c14de427f86e9b0aa1e0cc699165f255dd33fcc3a5571e4d5b1cfffc1355d3040822b86a5c3da77c9509539df1754722b13f58bef9ed163feb74dc8a5b647b9b76e639c3c6888c2bfa47",
      },
    }
  );

  const teams = await api.get("/api/sehjira-teams", {
    headers: {
      Authorization:
        "bearer 00533015bdbcb09e71f94ce80e58f4cafcd8582519b2918cb252691bd21c7fc4ffb8b25ba193228614766ddc6c21c049a21cfce2d195c14de427f86e9b0aa1e0cc699165f255dd33fcc3a5571e4d5b1cfffc1355d3040822b86a5c3da77c9509539df1754722b13f58bef9ed163feb74dc8a5b647b9b76e639c3c6888c2bfa47",
    },
  });

  return {
    props: {
      res: res.data.data,
      teams: teams.data.data,
    },
  };
}
