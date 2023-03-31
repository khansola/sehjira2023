import Image from "next/image";
import Link from "next/link";
import Links from "../atoms/Links";
function Footer() {
  const links = [
    {
      href: "/",
      title: "Visi Kami",
    },
    {
      href: "/",
      title: "Kedai Kami",
    },
    {
      href: "/",
      title: "Karir",
    },
    {
      href: "/",
      title: "Berita & Informasi",
    },
    {
      href: "/",
      title: "Produk Kami",
    },
    {
      href: "/",
      title: "Cara Order",
    },
    {
      href: "/",
      title: "FAQ'S",
    },
    {
      href: "www.facebook.com",
      image: "/static/svgs/Facebook.svg",
      alt: "Facebook",
    },
    {
      href: "www.twitter.com",
      image: "/static/svgs/Twitter.svg",
      alt: "Twitter",
    },
    {
      href: "www.instagram.com",
      image: "/static/svgs/Instagram.svg",
      alt: "Instagram",
    },
    {
      href: "www.linkedin.com",
      image: "/static/svgs/Linkedin.svg",
      alt: "Linkedin",
    },
    {
      href: "www.youtube.com",
      image: "/static/svgs/Youtube.svg",
      alt: "Youtube",
    },
  ];

  return (
    <>
      <footer className="bg-slate-50 w-full grid grid-cols-1 md:grid-cols-4 md:flex-row md:px-24 gap-5 dark:bg-[#1a202c] py-5">
        <div className="flex flex-col justify-between gap-4">
          <Image
            src="/images/LOGO_SEHJIRA_(1)_1.png"
            alt="sehjira"
            height={95}
            width={88}
          />
          <p className="font-semibold font text-base text-[#5D5A88] hover:text-blue-600 cursor-pointer">
            Konsultan, Advokasi, Pelatihan & Pendidikan Disabilitas Therapist
            Terapi Wicara untuk Disabilitas Pendengaran
          </p>
          <div className="flex gap-3 flex-wrap">
            {links.slice(7, 12).map((e, i) => {
              return (
                <li
                  key={i}
                  className="list-none text-[#5D5A88]  font-normal hover:text-blue-600 cursor-pointer"
                >
                  <Links href={e.href} image={e.image} alt={e.alt} />
                </li>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap w-full ">
          <div className="flex flex-wrap ">
            <ul>
              <p className=" pb-8 text-[#843C74] font-bold text-[24px]">
                <Link href={"/"}>Tautan Cepat</Link>
              </p>
              {links.slice(0, 4).map((e, i) => {
                return (
                  <li
                    key={i}
                    className="pb-2 text-[#5D5A88] font-semibold hover:text-blue-600 cursor-pointer"
                  >
                    <Links href={e.href} title={e.title} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <ul>
            <p className=" text-[24px] text-[#843C74] font-bold">
              <Link href={"/"}>Toko</Link>
            </p>
            {links.slice(4, 7).map((e, i) => {
              return (
                <li
                  key={i}
                  className="pb-2 text-[#5D5A88]  font-semibold hover:text-blue-600 cursor-pointer"
                >
                  <Links href={e.href} title={e.title} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="aspect-auto">
          <Image
            src="/images/salt.png"
            alt="sehjira"
            height={100}
            width={150}
          />
        </div>
      </footer>
      <div className="flex flex-col justify-center items-center text-center p-5 tracking-[0.4rem] dark:bg-[#1a202c]">
        <hr className="w-[100%] h-[1px] mx-auto bg-[black] border-0 my-8" />
        <p className="text-[#767494]  text-[18px]">
          © 2018 - 2023 Sehjira. Hak Cipta All Rights Reserved |{" "}
          <span className="text-[#ADABC3]">Syarat dan Ketentuan | Privasi</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
