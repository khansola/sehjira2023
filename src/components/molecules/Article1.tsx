import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

import { ArticleType } from "@/types/ArticleType";

type Props = {
  article: ArticleType[];
};

type props = Props;

const Article1 = ({ article }: props) => {
  const router = useRouter();
  return (
    <div className="">
      <div>
        <h1 className="text-[#843C74] text-5xl text-center mt-16 font-bold">
          Artikel Terbaru
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center ">
        {article.slice(0, 3).map((e, i) => {
          return (
            <div className="hover:scale-110 transition duration-500 " key={i}>
              <div className="flex flex-wrap justify-center mt-10 ">
                <Card
                  sx={{ maxWidth: 350, height: 450 }}
                  onClick={() =>
                    router.push(`/article-detail/${e.attributes.slug}`)
                  }
                >
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
      </div>
      <div className="flex justify-center items-center p-10 text-[#843C74] mt-7 text-center text-[15px] font-extrabold transition">
        <Link href="/article">
          <Button
            style=" px-5 border-2 rounded border-[#843C74] hover:bg-[#843C74] hover:text-white transition  "
            title="Lihat Selengkapnya"
          />
        </Link >
      </div>
    </div>
  );
};

export default Article1;
