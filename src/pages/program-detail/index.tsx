import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import Section3 from "@/components/molecules/RelatedArticle";

const index = () => {
  return (
    <BlankTemplate>
      <Section1Article />
      <Share />
      <Section3 />
    </BlankTemplate>
  );
};

export default index;
