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

// const About = ({ abouts }: props) => {
const About: NextPage<props> = ({ children, logo, timSehijra }) => {
  // const [data, setData] = useState<about[]>([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/about-page?populate=*", {
  //       headers: {
  //         Authorization:
  //           "bearer 00533015bdbcb09e71f94ce80e58f4cafcd8582519b2918cb252691bd21c7fc4ffb8b25ba193228614766ddc6c21c049a21cfce2d195c14de427f86e9b0aa1e0cc699165f255dd33fcc3a5571e4d5b1cfffc1355d3040822b86a5c3da77c9509539df1754722b13f58bef9ed163feb74dc8a5b647b9b76e639c3c6888c2bfa47",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     });
  // }, []);

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
