import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Galery from "@/components/molecules/Galery2";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";
import { galeryType } from "@/types/Galerytype";

type Galery = {
  galery: galeryType[];
};

type props = Galery;

function index({ galery }: props) {
  return (
    <BlankTemplate>
      <Galery galery={galery} />
    </BlankTemplate>
  );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const galery = await api.get("/api/galleries?populate=*");

  return {
    props: {
      galery: galery.data.data,
    },
  };
};
