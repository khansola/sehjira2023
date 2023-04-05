import BlankTemplate from "@/components/templates/BlankTemplate";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import Galery from "@/components/molecules/Article1";
import Article1 from "@/components/molecules/Galery";
import Glock from "@/components/molecules/Glock";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";
import { ImageSlider } from "@/components/molecules/Section";
import { galeryType } from "@/types/Galerytype";
import { slide_bannerType } from "@/types/Slide_BannerType";
import { slide_visi_misiType } from "@/types/Slide_VisiMisiType";
import { programType } from "@/types/ProgramType";
import { ArticleType } from "@/types/ArticleType";

type Home = {
  galery: galeryType[];
  banner: slide_bannerType[];
  slideVisiMisi: slide_visi_misiType[];
  program: programType[];
  article: ArticleType[];
};

type props = Home;

const index = ({ galery, banner, slideVisiMisi, program, article }: props) => {
  return (
    <BlankTemplate>
      <ImageHome banner={banner} />
      <Section>
        <ImageSlider slide_visi_misi={slideVisiMisi} />
      </Section>
      <Glock program={program} />
      <Article1 galery={galery} />
      <Galery article={article} />
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const banner = await api.get("/api/slide-banners?populate=*");
  const visiMisi = await api.get("/api/slide-visi-misis?populate=*");
  const galery = await api.get("/api/galleries?populate=*");
  const program = await api.get("/api/programs?populate=*");
  const article = await api.get("/api/articles?populate=*");

  return {
    props: {
      banner: banner.data.data,
      slideVisiMisi: visiMisi.data.data,
      galery: galery.data.data,
      program: program.data.data,
      article: article.data.data,
    },
  };
};
