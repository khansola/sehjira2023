import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import ProgramList from "@/components/molecules/ProgramList";
import DarkModeToggle from "@/components/molecules/DarkModeToggle";
import Galery from "@/components/molecules/Article1";
import Article1 from "@/components/molecules/Galery";
import Glock from "@/components/molecules/Glock";

const index = (props: any) => {
  return (
    <BlankTemplate>
      <DarkModeToggle />
      <ImageHome />
      <Section />
      {/* <ProgramList /> */}
      <Glock />
      <Article1 />
      <Galery />
    </BlankTemplate>
  );
};

export default index;

// export async function getStaticProps (){
//   const data = await axios.get("http://localhost:8080/v1/articles")
//   return {
//     props:{
//       data:data.data
//     }
//   }

// }
