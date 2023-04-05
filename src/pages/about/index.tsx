import BlankTemplate from "@/components/templates/BlankTemplate";
import About from "@/components/molecules/About";
import VisiMisi from "@/components/atoms/VisiMisi";
import LogoSlider from "@/components/molecules/LogoSlider";
import TimSehijira from "@/components/molecules/TimSehijira";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import { api } from "@/utils/api";
import { aboutType } from "@/types/AboutType";
import { teamType } from "@/types/TeamType";
import { logoType } from "@/types/LogoType";

type About = {
  data: aboutType;
  teams: teamType[];
  logo: logoType[];
};

type props = About;

const Index = ({ data, teams, logo }: props) => {
  console.log(logo[0].attributes.Image.data.attributes.url);

  return (
    <BlankTemplate>
      <About
        logo={<LogoSlider data={logo} />}
        timSehijra={<TimSehijira teams={teams} />}
      >
        <VisiMisi
          image={
            process.env.BASEURL +
            data.data.attributes.Image.data[0].attributes.url
          }
          title="Tentang Sehjira"
          desc="Rachmita Harahap, Pendiri Yayasan Sehat Jiwa Raga tampil pada Metro TV acara Kick Andy"
        ></VisiMisi>
        <VisiMisi
          image={
            process.env.BASEURL +
            data.data.attributes.Image.data[1].attributes.url
          }
          title="Latar Belakang"
          content={data.data.attributes.latar_belakang}
        ></VisiMisi>
        <VisiMisi title="Linimasa Sehjira">
          <ReactMarkdown className="reactmarkdown">
            {data.data.attributes.linimasa_sehjira}
          </ReactMarkdown>
        </VisiMisi>
        <div className="flex w-[70%] items-start">
          <VisiMisi title="Visi" content={data.data.attributes.visi}></VisiMisi>
          <VisiMisi title="Misi">
            <ReactMarkdown className="reactmarkdown">
              {data.data.attributes.misi}
            </ReactMarkdown>
          </VisiMisi>
        </div>
        <VisiMisi
          title="Mitra Kerja Sama"
          content={data.data.attributes.mitra_kerja_sama}
        ></VisiMisi>
      </About>
    </BlankTemplate>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get(`/api/about?populate=*`);

  const teams = await api.get("/api/sehjira-teams?populate=*");

  const logo = await api.get("/api/logo-mitras?populate=*");
  return {
    props: {
      data: res.data,
      teams: teams.data.data,
      logo: logo.data.data,
    },
  };
};
