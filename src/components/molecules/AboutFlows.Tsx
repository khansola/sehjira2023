import React from "react";
import CardCircle from "../atoms/CardCircle";
import Share from "../atoms/Share";

const AboutFlows = () => {
  const timsehjira = [
    {
      image: "/images/s.jpg",
      caption: "Dr. Rachmita Maun Harahap, ST., M Sn",
      title: "Dewan Pendiri",
    },
    {
      image: "/images/s.jpg",
      caption: "Linda Nora, S.E",
      title: "Dewan Pengawas",
    },
    {
      image: "/images/s.jpg",
      caption: "Plt. Ade Nurima, S.Komp",
      title: "Dewan Pengurus Ketua",
    },
    {
      image: "/images/s.jpg",
      caption: "Chaerunisa Eka, S.Ds",
      title: "Dewan Pengurus Sekretaris",
    },
    {
      image: "/images/s.jpg",
      caption: "Renny Nazir",
      title: "Dewan Bendahara",
    },
    {
      image: "/images/s.jpg",
      caption: "Aji Kurniawan, S.Ds",
      title: "Divisi Pendidikan dan Pelatihan",
    },
    {
      image: "/images/s.jpg",
      caption: "Erwin Syafruddin",
      title: "Tenaga Kerja Dan Wirausaha",
    },
    {
      image: "/images/s.jpg",
      caption: "Tuti Rusmaini",
      title: "Pemberdayaan dan Ekonomi",
    },
    {
      image: "/images/s.jpg",
      caption: "Dini Fitriani",
      title: "Humas dan Sosial Media",
    },
    {
      image: "/images/s.jpg",
      caption: "Indra Wibowo",
      title: "Advokasi dan Pelayanan Publik",
    },
    {
      image: "/images/s.jpg",
      caption: "Stefanus Indra",
      title: "Seni Budaya dan Pariwisata",
    },
    {
      image: "/images/s.jpg",
      caption: "Kurniaty, S.Pd., M.Pd",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
    {
      image: "/images/s.jpg",
      caption: "Akbar Alfado",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
    {
      image: "/images/s.jpg",
      caption: "Rafika Yanti",
      title: "Relawan  & Juru Bahasa Isyarat",
    },
    {
      image: "/images/s.jpg",
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
