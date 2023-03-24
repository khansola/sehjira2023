import React, { useState as UseState } from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Program from "@/components/molecules/Program";
import CardKotak from "@/components/atoms/CardKotak";
import axios from "axios";
import { useRouter as Router } from "next/router";

// type Program = {
//   id: number;
//   image: string;
//   caption: string;
//   title: string;
// };

// interface data {
//   res: Program[];
// }

const index = (props: any) => {
  const { res } = props;
  console.log(res);
  const router = Router();
  return (
    <BlankTemplate>
      {/* <Program action={() => setPage(page + 1)}> */}
      <Program action={() => console.log("s")}>
        {res.map((e: any, i: any) => {
          return (
            <div key={i}>
              <CardKotak
                image="/images/s.jpg"
                caption={e.excerpt}
                title={e.title}
                action={() => router.push(`/program-detail/${e.slug}`)}
                // action={() => coba(e.id)}
              />
            </div>
          );
        })}
      </Program>
      {/* <div className="p-36" onClick={() =>coba() }>
        tambah
      </div> */}
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps = async () => {
  const res = await axios.get(`http://localhost:8080/v1/articles`);

  return {
    props: {
      res: res.data.data.articles,
    },
  };
};
