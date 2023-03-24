import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Logo from "../atoms/Logo";

const List = [
  {
    url: "/images/logoIpsum2.png",
  },
  {
    url: "/images/logoIpsum1.png",
  },
  {
    url: "/images/logoIpsum2.png",
  },
  {
    url: "/images/logoIpsum1.png",
  },
  {
    url: "/images/logoIpsum2.png",
  },
];

const LogoSlider = () => {
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
    if (angkaKanan <= List.length - 1) {
      setAngkaKanan(++angkaKanan);
      setAngkaKiri(++angkaKiri);
    }
  };
  return (
    <div className=" flex items-center justify-evenly gap-5">
      <div onClick={() => kiri()}>
        <FaArrowAltCircleLeft size={30} />
      </div>
      {List.slice(angkaKiri, angkaKanan).map((e, i) => {
        return <Logo key={i} image={e.url} />;
      })}
      <div onClick={() => kanan()}>
        <FaArrowAltCircleRight size={30} />
      </div>
    </div>
  );
};

export default LogoSlider;
