import React from "react";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import About from "@/components/molecules/About";

const index = () => {
  return (
    <BlankTemplate>
      <About />
    </BlankTemplate>
  );
};

export default index;
