import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";
import RelatedCard from "@/components/atoms/RelatedCard";
import axios from "axios";

const index = (props: any) => {
  const { res } = props;

  console.log(res);
  return (
    <BlankTemplate>
      <Section1Article
        title={res.title}
        content={res.content}
        created_at={res.date.created_at}
      />
      <Share />
      <RelatedArticle>
        {res.related_articles.map((e: any, i: any) => {
          return (
            <RelatedCard
              key={i}
              image="/images/l.jpg"
              title={e.title}
              excerpt={e.excerpt}
              created_at={e.date.created_at}
            />
          );
        })}
      </RelatedArticle>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  try {
    const res = await axios.get(`http://localhost:8080/v1/articles/${slug}`);
    return {
      props: {
        res: res.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/program",
        permanent: false,
      },
    };
  }
};
