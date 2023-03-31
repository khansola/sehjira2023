import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";
import RelatedCard from "@/components/atoms/RelatedCard";

import { api } from "@/utils/api";
import { GetServerSideProps } from "next";

const ArticleDetail = (props: any) => {
  const { article, terkini } = props;
  console.log(article);
  console.log(terkini);

  return (
    <BlankTemplate>
      <Section1Article
        // title="Pelatihan Kemandirian Remaja Tuna Rungu Ke-5"
        title={article.data.attributes.Title}
        content={article.data.attributes.content}
        created_at={article.data.attributes.createdAt}
      />
      <Share />
      <RelatedArticle>
        {terkini.data.slice(0, 3).map((e: any, i: any) => {
          return (
            <RelatedCard
              key={i}
              image={
                process.env.BASEURL + e.attributes.Image.data.attributes.url
              }
              title={e.attributes.Title}
              excerpt={e.attributes.excerpt}
              created_at={e.attributes.createdAt}
            />
          );
        })}
      </RelatedArticle>
    </BlankTemplate>
  );
};

export default ArticleDetail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.params;
  try {
    const article = await api.get(`/api/articles/${id}?populate=*`);
    const terkini = await api.get("api/articles/?populate=*");
    console.log(article);
    return {
      props: {
        article: article.data,
        terkini: terkini.data,
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
