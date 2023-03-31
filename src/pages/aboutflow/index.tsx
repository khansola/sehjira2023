import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Aboutflows from "@/components/molecules/AboutFlows";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";
import CardCircle from "@/components/atoms/CardCircle";

const index = (props: any) => {
  const { teams } = props;
  console.log(teams);

  return (
    <BlankTemplate>
      <Aboutflows>
        {teams.map((e: any, i: any) => {
          return (
            <CardCircle
              key={i}
              image={"/images/Image(1).png"}
              caption={e.attributes.division}
              title={`${
                e.attributes.post_degree ? e.attributes.post_degree : ""
              } ${e.attributes.title} ${
                e.attributes.degree ? e.attributes.degree : ""
              }`}
            ></CardCircle>
          );
        })}
      </Aboutflows>
    </BlankTemplate>
  );
};

export default index;

export async function getServerSideProps() {
  const teams = await api.get("/api/sehjira-teams", {
    headers: {
      Authorization:
        "bearer 00533015bdbcb09e71f94ce80e58f4cafcd8582519b2918cb252691bd21c7fc4ffb8b25ba193228614766ddc6c21c049a21cfce2d195c14de427f86e9b0aa1e0cc699165f255dd33fcc3a5571e4d5b1cfffc1355d3040822b86a5c3da77c9509539df1754722b13f58bef9ed163feb74dc8a5b647b9b76e639c3c6888c2bfa47",
    },
  });

  return {
    props: {
      teams: teams.data.data,
    },
  };
}
