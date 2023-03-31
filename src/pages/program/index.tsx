import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Program from "@/components/molecules/Program";
import CardKotak from "@/components/atoms/CardKotak";
import axios from "axios";
import { useRouter as Router } from "next/router";
import { api } from "@/utils/api";
import { GetServerSideProps } from "next";

// type Program = {
//   id: number;
//   image: string;
//   caption: string;
//   title: string;
// };

// interface data {
//   res: Program[];
// }

const index = (props: any) => {
  const { program } = props;
  console.log(program);

  const router = Router();

  return (
    <BlankTemplate>
      {/* <Program action={() => setPage(page + 1)}> */}
      <Program action={() => console.log("s")}>
        {program.data.map((e: any, i: any) => {
          return (
            <div key={i}>
              <CardKotak
                image={
                  process.env.BASEURL +
                  e.attributes.Image.data[0].attributes.url
                }
                caption={e.attributes.Excerpt}
                title={e.attributes.Title}
                action={() => router.push(`/program-detail/${e.id}`)}
                // action={() => coba(e.id)}
              />
            </div>
          );
        })}
        {/* <div>(res.latar_belakang)</div> */}
      </Program>
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const program = await api.get("/api/programs?populate=*");
  // console.log(res.data);

  return {
    props: {
      program: program.data,
    },
  };
};
