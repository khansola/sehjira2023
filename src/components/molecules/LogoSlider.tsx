import { api } from "@/utils/api";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Logo from "../atoms/Logo";
import { logoType } from "@/types/LogoType";

type Props = {
  data: logoType[];
};

type props = Props;

const LogoSlider = ({ data }: props) => {
  let [angkaKiri, setAngkaKiri] = useState<number>(0);
  let [angkaKanan, setAngkaKanan] = useState<number>(4);
  const kiri = (): void => {
    if (angkaKiri < 1) {
      setAngkaKiri(0);
    } else {
      setAngkaKiri(--angkaKiri);
      setAngkaKanan(--angkaKanan);
    }
  };
  const kanan = () => {
    if (angkaKanan <= data.length - 1) {
      setAngkaKanan(++angkaKanan);
      setAngkaKiri(++angkaKiri);
    }
  };
  return (
    <div className=" flex items-center justify-evenly gap-5">
      <div onClick={() => kiri()}>
        <FaArrowAltCircleLeft size={30} />
      </div>
      {data.slice(angkaKiri, angkaKanan).map((e, i) => {
        return (
          <Logo
            key={i}
            image={process.env.BASEURL + e.attributes.Image.data.attributes.url}
          />
        );
      })}
      <div onClick={() => kanan()}>
        <FaArrowAltCircleRight size={30} />
      </div>
    </div>
  );
};

export default LogoSlider;
