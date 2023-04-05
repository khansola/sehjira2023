import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Program from "@/components/molecules/Program";
import CardKotak from "@/components/atoms/CardKotak";
import { useRouter as Router } from "next/router";
import { api } from "@/utils/api";
import { GetServerSideProps } from "next";
import { useState as state } from "react";
import { programType } from "@/types/ProgramType";

type program = {
  program: programType[];
  currentPage: number;
};

type props = program;

const index = ({ program, currentPage }: props) => {
  const [data, setData] = state<program[] | any>([]);
  // console.log(program);

  const router = Router();

  async function handleButtonClick() {
    const nextPage = currentPage + 10;
    // const response = await api(
    //   `/api/programs?pagination[start]=0&pagination[limit]=${currentPage}&populate=*`
    // );
    // setData(response.data);
    router.push(`/program?page=${nextPage}`);
  }

  return (
    <BlankTemplate>
      <Program
        halaman="Program Unggulan Sehjira Terbaru"
        title={program[0].attributes.Title}
        caption={program[0].attributes.Excerpt}
        image={
          process.env.BASEURL + program[0].attributes.Image.data.attributes.url
        }
        action2={() =>
          router.push(`/program-detail/${program[0].attributes.slug}`)
        }
        action={() => handleButtonClick()}
      >
        {program.map((e, i) => {
          return (
            <div key={i}>
              <CardKotak
                image={
                  process.env.BASEURL + e.attributes.Image.data.attributes.url
                }
                caption={e.attributes.Excerpt}
                title={e.attributes.Title}
                action={() =>
                  router.push(`/program-detail/${e.attributes.slug}`)
                }
              />
            </div>
          );
        })}
      </Program>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const currentPage = parseInt(ctx.query.page as string, 10) || 10;
  const program = await api.get(
    `/api/programs?pagination[start]=0&pagination[limit]=${currentPage}&populate=*`
  );
  // console.log(res.data);

  return {
    props: {
      program: program.data.data,
      currentPage: currentPage,
    },
  };
};
