import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";
import RelatedCard from "@/components/atoms/RelatedCard";

import { useRouter as Router } from "next/router";

import { api } from "@/utils/api";
import { GetServerSideProps } from "next";

import { ArticleType } from "@/types/ArticleType";

type article = {
  article: ArticleType;
  terkini: ArticleType[];
};

type props = article;

const index = ({ article, terkini }: props) => {
  console.log(article);
  console.log(terkini);

  const router = Router();

  return (
    <BlankTemplate>
      <Section1Article
        title={article.attributes.Title}
        content={article.attributes.content}
        created_at={article.attributes.createdAt}
        image={
          process.env.BASEURL + article.attributes.Image.data.attributes.url
        }
      />
      <Share />
      <RelatedArticle>
        {terkini.slice(0, 3).map((e, i) => {
          return (
            <RelatedCard
              onClick={() =>
                router.push(`/article-detail/${e.attributes.slug}`)
              }
              key={i}
              image={
                process.env.BASEURL + e.attributes.Image.data.attributes.url
              }
              title={e.attributes.Title}
              excerpt={e.attributes.Excerpt}
              created_at={e.attributes.createdAt}
            />
          );
        })}
      </RelatedArticle>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.params;
  try {
    const article = await api.get(
      `/api/articles?filters[slug][$eq]=${slug}&populate=*`
    );
    const terkini = await api.get("api/articles/?populate=*");
    return {
      props: {
        article: article.data.data[0],
        terkini: terkini.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/article",
        permanent: false,
      },
    };
  }
};
