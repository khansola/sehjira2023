import { NextPage } from "next";
import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/PrimaryNavigation";
import DarkModeToggle from "../molecules/DarkModeToggle";
import SosmedSide from "../atoms/SosmedSide";
import { CommonSEO } from "../SEO";
import { useRouter as Router } from "next/router";
import LoadingPage from "../atoms/LoadingPage";



type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  const router = Router();
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
        <div className="fixed z-99231239">
        <LoadingPage />
        </div>
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
