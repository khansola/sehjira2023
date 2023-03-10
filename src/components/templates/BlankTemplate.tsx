import { NextPage } from "next";
import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/PrimaryNavigation";
import DarkModeToggle from "../molecules/DarkModeToggle";
import SosmedSide from "../atoms/SosmedSide";
import { CommonSEO } from "../SEO";
import { useRouter } from "next/router";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  const router = useRouter();
  const myPath = (): string => {
    let path: string = "";
    if (router.asPath == "/") {
      path = "Home";
    } else {
      path = router.asPath.replace("/", "");
    }
    return path;
  };
  // console.log(myPath());

  return (
    <>
      <div className="min-h-screen flex w-full flex-col dark:bg-[#1a202c] ">
        <CommonSEO
          title={myPath()}
          description="Description of Create Next Page by GG"
        />
        <PrimaryNavigation />
        <SosmedSide />
        {children}
        <DarkModeToggle />
        <Footer />
      </div>
    </>
  );
};

export default BlankTemplate;
