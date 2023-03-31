import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Article from "@/components/molecules/Article";
import CardKotak from "@/components/atoms/CardKotak";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";

import { useRouter as Router } from "next/router";

const index = (props: any) => {
  const { article } = props;
  console.log(article.data);
  console.log(article.data[0].attributes.Image.data.attributes.url);

  const router = Router();

  return (
    <BlankTemplate>
      <Article>
        {article.data.map((e: any, i: any) => {
          return (
            <CardKotak
              key={i}
              image={
                process.env.BASEURL + e.attributes.Image.data.attributes.url
              }
              caption={e.attributes.Excerpt}
              title={e.attributes.title}
              action={() => router.push(`/article-detail/${e.id}`)}
            />
          );
        })}
      </Article>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const article = await api.get("/api/articles?populate=*");
  // console.log(res.data);

  return {
    props: {
      article: article.data,
    },
  };
};
