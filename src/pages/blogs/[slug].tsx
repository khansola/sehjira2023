import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import BlankTemplate from "@/components/templates/BlankTemplate";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();

  return (
    <BlankTemplate>
      <PrimaryNavigation />
      <h1>Welcome to blog page!</h1>
      <p>
        Here is the query of the blog page:{" "}
        <code className="font-bold bg-red-500 px-2">{router.query.slug}</code>
      </p>
    </BlankTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default BlogPost;
