import React from "react";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import ImageHome from "@/components/molecules/ImageHome";
import Galery from "@/components/molecules/Galery2";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";

function index(props: any) {
  return (
    <BlankTemplate>
      <Galery />
    </BlankTemplate>
  );
}

export default index;
