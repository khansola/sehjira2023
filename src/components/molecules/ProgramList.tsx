import Button from "../atoms/Button";
import Cards from "../atoms/Cards";
import { useState } from "react";

const ProgramList = () => {
  let [angkaKiri, setAngkaKiri] = useState<number>(0);
  let [angkaKanan, setAngkaKanan] = useState<number>(4);

  const List = [
    {
      image: "/images/Container1.png",
      caption:
        "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA",
    },
    {
      image: "/images/Container2.png",
      caption: "Kelas Kursus Komputer tingkat dasar dan Mahir",
    },
    {
      image: "/images/Container3.png",
      caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL",
    },
    {
      image: "/images/Container4.png",
      caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
    },
    {
      image: "/images/f.jpg",
      caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
    },
    {
      image: "/images/f.jpg",
      caption: "Pelatiha kemandırian disabilitas rungu/Tuli bekerja",
    },
    {
      image: "/images/s.jpg",
      caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
    },
    {
      image: "/images/s.jpg",
      caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
    },
  ];

  const kiri = (): void => {
    // console.log("kiri", angkaKiri);
    // console.log("kanan", angkaKanan);
    if (angkaKiri < 1) {
      setAngkaKiri(0);
    } else {
      setAngkaKiri(--angkaKiri);
      setAngkaKanan(--angkaKanan);
    }
  };
  const kanan = () => {
    // console.log("kiri", angkaKiri);
    // console.log("kanan", angkaKanan);
    // console.log(List.length);
    if (angkaKanan <= List.length - 1) {
      setAngkaKanan(++angkaKanan);
      setAngkaKiri(++angkaKiri);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center mt-10 gap-5  ">
      <div className=" text-center text-[#843C74] pb-5 font-extrabold ">
        <h1 className=" text-3xl">Program Unggulan Sehjira</h1>
      </div>
      <div className=" flex flex-wrap items-center justify-center gap-1">
        <div onClick={() => kiri()}>kiri</div>
        {List.slice(angkaKiri, angkaKanan).map((e, i) => {
          return <Cards key={i} image={e.image} caption={e.caption} />;
        })}
        <div onClick={() => kanan()}>kanan</div>
      </div>
      <div className=" text-[#843C74]  mt-5 text-center text-[24px] font-extrabold ">
        <Button
          style="p-3 border-4 rounded-xl border-[#843C74]  "
          title="Lihat Semua Program Unggulan"
        />
      </div>
    </div>
  );
};

export default ProgramList;

// type articles = {
//   author_name: string;
//   date: {
//   created_at: string;
//   updated_at: string;
//   };
//   excerpt: string;
//   image_thumbnail_url: string;
//   slug: string;
//   tags: [string, string, string];
//   title: string;
//   };

// const ProgramList = () => {
//   const [data, setData] = useState<articles[]>([])
//   useEffect (() => {
//   axios.get("http://localhost:8080/v1/articles").then((test) => {

//   setData(test.data.data.articles)

//   })
//   },[]);
//   console.log(data);

/* <div>
{data.map((v,i) => {
return (
  <div key={i}>
    <p>{v.tags[i]}</p>
  </div>
)
})};
</div> */
