import * as React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import { NextPage } from "next";

type ProgramList = {
  image: string;
  children?: React.ReactNode;
  action?: (v: React.MouseEvent) => void;
};

type Props = ProgramList;

const CardRectangle: NextPage<Props> = ({ children, image, action }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <div>
        <Card sx={{ maxWidth: 300, height: "auto" }}>
          <div>
            <Image
              src={image}
              alt={"vector.png"}
              width={350}
              height={220}
            ></Image>
            <div>{children}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardRectangle;
