import { GetServerSideProps } from "next";
import { api } from "@/utils/api";
import React from "react";

const Test = (props: any) => {
  const { data } = props;
  console.log(data);

  return <div>Test</div>;
};

export default Test;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get("/api/homepage?populate=*");
  // console.log(res.data);

  return {
    props: {
      data: res.data,
    },
  };
};
