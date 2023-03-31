import { api } from "@/utils/api";
import { GetServerSideProps } from "next";
import React from "react";
import CardCircle from "../atoms/CardCircle";
import { NextPage } from "next";

type props = {
  children: React.ReactNode;
};

const TimSehijira: NextPage<props> = ({ children }) => {
  // const timsehjira = [
  //   {
  //     image: "/images/Container9.png",
  //     caption: "Dr. Rachmita Maun Harahap, ST., M Sn",
  //     title: "Dewan Pendiri",
  //   },
  //   {
  //     image: "/images/Container9.png",
  //     caption: "Linda Nora, S.E",
  //     title: "Dewan Pengawas",
  //   },
  //   {
  //     image: "/images/Container9.png",
  //     caption: "Plt. Ade Nurima, S.Komp",
  //     title: "Dewan Pengurus Ketua",
  //   },
  //   {
  //     image: "/images/Container9.png",
  //     caption: "Chaerunisa Eka, S.Ds",
  //     title: "Dewan Pengurus Sekretaris",
  //   },
  // ];

  return (
    <div>
      <div className="py-10 w-auto">
        <div className="font-bold text-[64px] text-[#000000] h-20">
          <h3 className="font-bold">Tim Sehjira</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-10 w-auto  ">
          {/* {timsehjira.map((e, i) => {
            return (
              <CardCircle
                key={i}
                image={e.image}
                caption={e.caption}
                title={e.title}
              ></CardCircle>
            );
          })} */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimSehijira;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const res = await api.get("/api/sehjira-teams");
//   console.log(res.data);
// 	return {
// 		props: {
// 		},
// 	};
// };
