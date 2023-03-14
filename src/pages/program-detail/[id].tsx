import axios from "axios";
import { useRouter as Router } from "next/router";

const index = (props: any) => {
  const { res } = props;
  const router = Router();

  console.log(res);
  return (
    <div>
      <p>{JSON.stringify(res.author)}</p>
      <p>{res.title}</p>
      <p>{res.content}</p>
      <p>{res.slug}</p>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  // const res = await axios.get(`http://localhost:8080/v1/articles/${id}`);

  // return {
  //   props: {
  //     res: context,
  //   },
  // };

  // console.log(slug);
  try {
    const res = await axios.get(`http://localhost:8080/v1/articles/${id}`);
    if (!res) {
      return {
        props: {
          res: "ss",
        },
      };
    } else {
      return {
        props: {
          res: res.data.data,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/program",
        permanent: false,
      },
    };
  }
};
