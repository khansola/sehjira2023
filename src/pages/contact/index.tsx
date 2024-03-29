import BlankTemplate from "@/components/templates/BlankTemplate";
import Contact from "@/components/molecules/Contact";
import ImageContent from "@/components/molecules/ImageContent";
import SosialMedia from "@/components/molecules/SosialMedia";
import Maps from "@/components/molecules/Maps";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";

const index = () => {
  return (
    <BlankTemplate>
      <div className="w-full flex gap-14 justify-beetween pb-20 md:bg-none bg-puan">
        <ImageContent />
        <Contact />
      </div>
      <Maps />
      <SosialMedia />
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get("/api/contact-forms");
  console.log(res.data);
  return {
    props: {},
  };
};
