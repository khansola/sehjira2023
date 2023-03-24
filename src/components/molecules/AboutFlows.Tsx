import React from "react";
import CardCircle from "../atoms/CardCircle";
import Share from "../atoms/Share";

const AboutFlows = () => {
  const timsehjira = [
    {
      image: "/images/Container9.png",
      caption: "Dr. Rachmita Maun Harahap, ST., M Sn",
      title: "Dewan Pendiri",
    },
    {
      image: "/images/Container9.png",
      caption: "Linda Nora, S.E",
      title: "Dewan Pengawas",
    },
    {
      image: "/images/Container9.png",
      caption: "Plt. Ade Nurima, S.Komp",
      title: "Dewan Pengurus Ketua",
    },
    {
      image: "/images/Container9.png",
      caption: "Chaerunisa Eka, S.Ds",
      title: "Dewan Pengurus Sekretaris",
    },
    {
      image: "/images/Container9.png",
      caption: "Renny Nazir",
      title: "Dewan Bendahara",
    },
    {
      image: "/images/Container9.png",
      caption: "Aji Kurniawan, S.Ds",
      title: "Divisi Pendidikan dan Pelatihan",
    },
    {
      image: "/images/Container9.png",
      caption: "Erwin Syafruddin",
      title: "Tenaga Kerja Dan Wirausaha",
    },
    {
      image: "/images/Container9.png",
      caption: "Tuti Rusmaini",
      title: "Pemberdayaan dan Ekonomi",
    },
    {
      image: "/images/Container9.png",
      caption: "Dini Fitriani",
      title: "Humas dan Sosial Media",
    },
    {
      image: "/images/Container9.png",
      caption: "Indra Wibowo",
      title: "Advokasi dan Pelayanan Publik",
    },
    {
      image: "/images/Container9.png",
      caption: "Stefanus Indra",
      title: "Seni Budaya dan Pariwisata",
    },
    {
      image: "/images/Container9.png",
      caption: "Kurniaty, S.Pd., M.Pd",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
    {
      image: "/images/Container9.png",
      caption: "Akbar Alfado",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
    {
      image: "/images/Container9.png",
      caption: "Rafika Yanti",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
    {
      image: "/images/Container9.png",
      caption: "Tamana Febriyanti",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
  ];

  return (
    <div className="flex flex-wrap px-[7%] gap-5 justify-center md:justify-between">
      {timsehjira.map((e, i) => {
        return (
          <CardCircle
            key={i}
            image={e.image}
            caption={e.caption}
            title={e.title}
          >
            <Share />
          </CardCircle>
        );
      })}
    </div>
  );
};

export default AboutFlows;
