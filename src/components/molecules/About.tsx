import Button from "../atoms/Button";
import TimSehijira from "./TimSehijira";
import VisiMisi from "../atoms/VisiMisi";
import LogoSlider from "./LogoSlider";
import { NextPage } from "next";
import axios from "axios";

// export type about = {
//   id: number;
//   attributes: {
//     latar_belakang: string;
//     visi: string;
//     misi: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     lini_masa: [
//       {
//         list: string;
//       }
//     ];
//   };
// };

type props = {
  // abouts: about[];
  children: React.ReactNode;
  timSehijra: React.ReactNode;
  logo: React.ReactNode;
};

const About: NextPage<props> = ({ children, logo, timSehijra }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        {children}
      </div>
      <div className="py-5-">{logo}</div>
      {timSehijra}

      <div className=" flex text-center justify-center items-center">
        <div className="mt-16 w-auto p-2  px-16 border-2 rounded-full text-white border-[#843C74] bg-[#843C74] hover:bg-white hover:text-[#843C74] transition ">
          <Button title="Lihat Selengkapnya 🡲" />
        </div>
      </div>
    </div>
  );
};

export default About;
