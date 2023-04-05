import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";
import RelatedCard from "@/components/atoms/RelatedCard";
import { api } from "@/utils/api";
import { GetServerSideProps } from "next";

import { useRouter as Router } from "next/router";

import { programType } from "@/types/ProgramType";

type program = {
  program: programType;
  terkini: programType[];
};

type props = program;

const index = ({ program, terkini }: props) => {
  console.log(program);
  const router = Router();
  // console.log(terkini);
  return (
    <BlankTemplate>
      <Section1Article
        title={program.attributes.Excerpt}
        content={program.attributes.content}
        created_at={program.attributes.createdAt}
        image={
          process.env.BASEURL + program.attributes.Image.data.attributes.url
        }
      />
      <Share />
      <RelatedArticle>
        {terkini.slice(0, 3).map((e, i) => {
          return (
            <RelatedCard
              key={i}
              image={
                process.env.BASEURL + e.attributes.Image.data.attributes.url
              }
              title={e.attributes.Title}
              excerpt={e.attributes.Excerpt}
              created_at={e.attributes.createdAt}
              onClick={() =>
                router.push(`/program-detail/${e.attributes.slug}`)
              }
            />
          );
        })}
      </RelatedArticle>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try {
    const { slug } = context.params;

    const program = await api.get(
      `/api/programs?filters[slug][$eq]=${slug}&populate=*`
    );
    // if (!program) {
    //   return {
    //     notFound: true,
    //   };
    // }
    const terkini = await api.get("/api/programs/?populate=*");

    console.log(program);
    return {
      props: {
        program: program.data.data[0],
        terkini: terkini.data.data,
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
