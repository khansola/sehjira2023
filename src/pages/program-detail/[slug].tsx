import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";
import RelatedCard from "@/components/atoms/RelatedCard";
import axios from "axios";
import { api } from "@/utils/api";
import { GetServerSideProps } from "next";

const index = (props: any) => {
  const { program, terkini } = props;

  console.log(program);
  console.log(terkini);
  return (
    <BlankTemplate>
      <Section1Article
        title={program.data.attributes.Title}
        content={program.data.attributes.content}
        created_at={program.data.attributes.createdAt}
      />
      <Share />
      <RelatedArticle>
        {terkini.data.slice(0, 3).map((e: any, i: any) => {
          return (
            <RelatedCard
              key={i}
              image={
                process.env.BASEURL + e.attributes.Image.data[0].attributes.url
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

export default index;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.params;
  try {
    const program = await api.get(`/api/programs/${slug}?populate=*`);
    const terkini = await api.get("api/programs/?populate=*");
    console.log(program);
    return {
      props: {
        program: program.data,
        terkini: terkini.data,
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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const program = await api.get(`/api/programs/${id}?populate=*`);
//   // console.log(res.data);

//   return {
//     props: {
//       program: program.data,
//     },
//   };
// };
