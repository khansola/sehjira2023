import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Program from "@/components/molecules/Program";
import CardKotak from "@/components/atoms/CardKotak";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";

import { useRouter as Router } from "next/router";

import { ArticleType } from "@/types/ArticleType";

type article = {
  article: ArticleType[];
};

type props = article;

const index = ({ article }: props) => {
  console.log(article);

  // console.log(article.data);
  // console.log(article.data[0].attributes.Image.data.attributes.url);

  const router = Router();

  return (
    <BlankTemplate>
      <Program
        halaman="Program Unggulan Sehjira Terbaru"
        title={article[0].attributes.Title}
        caption={article[0].attributes.Excerpt}
        image={
          process.env.BASEURL + article[0].attributes.Image.data.attributes.url
        }
        action2={() =>
          router.push(`/article-detail/${article[0].attributes.slug}`)
        }
      >
        {article.map((e, i) => {
          return (
            <CardKotak
              key={i}
              image={
                process.env.BASEURL + e.attributes.Image.data.attributes.url
              }
              caption={e.attributes.Excerpt}
              title={e.attributes.Title}
              action={() => router.push(`/article-detail/${e.attributes.slug}`)}
            />
          );
        })}
      </Program>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const article = await api.get("/api/articles?populate=*");
  return {
    props: {
      article: article.data.data,
    },
  };
};
