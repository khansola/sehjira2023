import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/system";

type ArticleSlug = {
  slug?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  created_at: string;
  updated_at?: string;
  image?: string;
};

type Props = ArticleSlug;

const Section1Article = (props: Props) => {
  return (
    <div className="w-full grid justify-center mt-5">
      <ul className="px-[7%]">
        <Link
          className="hyperlink text-[#5D5A88]  font-semibold hover:text-blue-600 cursor-pointer"
          href="/"
        >
          Pusat Edukasi -
        </Link>
        <Link
          className="hyperlink text-[#5D5A88]  font-semibold hover:text-blue-600 cursor-pointer"
          href="/"
        >
          Artikel Ilmiah -
        </Link>
        <Link
          className="hyperlink text-[#5D5A88]  font-semibold hover:text-blue-600 cursor-pointer"
          href="/"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Link>
      </ul>
      <div className="items-left mt-2 px-[7%] font-bold  text-[#A03C78]  ">
        <h1 className="text-4xl">{props.title}</h1>
        {/* <h1 className="text-4xl">
          Pelatihan Kemandirian Remaja Tuna Rungu Ke-5
        </h1> */}
      </div>
      <div>
        <ul className="flex gap-3 mt-1 px-[7%]">
          <li>
            <Image
              src="/images/Vector.png"
              alt={"vector.png"}
              width={18}
              height={20.75}
            ></Image>
          </li>
          <li>
            {/* <p>31 January 2030</p> */}
            <p>{props.created_at}</p>
          </li>
        </ul>
      </div>
      <div className=" w-full grid justify-center mt-5 px-[7%]">
        <Image
          src={props.image!}
          alt={"Rectangle 229.png"}
          width={1200}
          height={600}
        ></Image>
      </div>
      <p className=" text-justify pt-5 px-[7%]">{props.content}</p>

      <div className="grid justify-center mt-5 px-[7%] hover:scale-110 transition">
        <Image
          src="/images/Rectangle 228.png"
          alt={"Rectangle 228.png"}
          width={600}
          height={400}
        ></Image>
      </div>
      <p className="mt-5 text-justify px-[7%]  ">{props.content}</p>
      <div className="mt-5 px-[7%]  ">
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }} />
      </div>
    </div>
  );
};

export default Section1Article;
