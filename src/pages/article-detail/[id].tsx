import BlankTemplate from "@/components/templates/BlankTemplate";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import RelatedArticle from "@/components/molecules/RelatedArticle";
import RelatedCard from "@/components/atoms/RelatedCard";

const ArticleDetail = () => {
  return (
    <BlankTemplate>
      <Section1Article
        title="Pelatihan Kemandirian Remaja Tuna Rungu Ke-5"
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo
        luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis
        consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
        Pellentesque nec aliquet dui. Aliquam pharetra odio sit amet risus
        tristique sollicitudin. Ut venenatis risus vel tellus dictum tincidunt.
        Nam rhoncus pellentesque nulla sit amet pretium. Integer lectus massa,
        consequat ut neque non, lobortis ornare elit. Sed commodo aliquet odio
        non malesuada. Proin semper, velit sit amet placerat laoreet, leo nibh
        tristique massa, ut pharetra nisi nibh vitae augue. Integer et convallis
        nisi. Nulla euismod, elit vel accumsan posuere, eros nulla ultricies
        libero, ac tincidunt magna diam et ligula. Pellentesque vitae ultricies
        mi. Vestibulum ac laoreet felis. Cras tempor lectus at vehicula
        condimentum. Nam sed mi in magna egestas efficitur eget et risus. Aenean
        quis elit sodales, dignissim diam eu, scelerisque tellus. Mauris
        pharetra libero a lacus condimentum, ac auctor ipsum convallis. Proin
        varius tempor eros, sed pellentesque nulla gravida ac. Sed porta gravida
        lorem ac dictum. In at velit at sapien sagittis sagittis. Aenean
        scelerisque felis est, et pellentesque magna tincidunt ac."
        created_at="31 January 2030"
      />
      <Share />
      <RelatedArticle>
        <RelatedCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan."
          created_at="31 January 2030"
          image="/images/f.jpg"
        />
      </RelatedArticle>
    </BlankTemplate>
  );
};

export default ArticleDetail;
