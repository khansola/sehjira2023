import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PrimaryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  return (
    <>
      <nav
        className="
        dark:bg-[#1a202c]
          w-full
          py-4
          md:py-0
          px-16
          text-lg text-gray-700
          bg-white
        "
      >
        <div className="flex justify-between">
          <Link href="/">
            <Image
              className={`cursor-pointer md:hidden block`}
              src="/images/LOGO_SEHJIRA_(1)_1.png"
              height={87}
              width={81}
              alt="sehijra"
            />
          </Link>
          <div
            className={`h-6 w-6 cursor-pointer md:hidden block`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              className={`cursor-pointer md:hidden block w-[500px] h-[85px]   `}
              src="/images/dehaze.svg"
              height={200}
              width={500}
              alt="burger"
            />
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div
            className="
              pt-4
              md:flex
              md:justify-between
              md:items-center
              md:pt-0
              md:w-full
              pb-4
              "
          >
            <div className="md:flex md:flex-row md:gap-10">
              <p className="text-[#843C74] font-bold text-[24px]">
                <Link href={"/"}>Beranda</Link>
              </p>
              <p className="text-[#843C74] font-bold text-[24px]">
                <Link href={"/"}>Tentang Kami</Link>
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/LOGO_SEHJIRA_(1)_1.png"
                height={87}
                width={81}
                alt="sehijra"
              />
            </div>
            <div className="md:flex md:flex-row md:gap-10">
              <p className="text-[#843C74] font-bold text-[24px]">
                <Link href={"/"}>Hubungi Kami</Link>
              </p>
              <p className="text-[#843C74] font-bold text-[24px]">
                <Link href={"/"}>Program Kami</Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default PrimaryNavigation;
