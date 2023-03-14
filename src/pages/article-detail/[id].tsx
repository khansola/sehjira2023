import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";

const ArticleDetail = () => {
  return (
    <BlankTemplate>
      <Section1Article />
      <Share />
      <RelatedArticle />
    </BlankTemplate>
  );
};

export default ArticleDetail;
