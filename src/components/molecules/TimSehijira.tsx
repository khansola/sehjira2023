import { api } from "@/utils/api";
import { GetServerSideProps } from "next";
import React from "react";
import CardCircle from "../atoms/CardCircle";
import { teamType } from "@/types/TeamType";

type props = {
  teams: teamType[];
};

const TimSehijira = ({ teams }: props) => {
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
          {teams.slice(0, 4).map((e, i) => {
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
