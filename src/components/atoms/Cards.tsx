import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";

type ProgramList = {
  image: string;
  caption: string;
  desc?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

type Props = ProgramList;

const Cards = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 ">
      <div className="hover:scale-110 hover:translate-y-6 transition duration-500">
        <Card sx={{ maxWidth: 300, height: 450 }}>
          <div>
            <Image
              src={props.image}
              alt={"vector.png"}
              width={350}
              height={220}
            ></Image>
          </div>
          <CardContent className="hover:bg-[#843C74] hover:text-white">
            <div>
              <Typography
                className=""
                gutterBottom
                variant="h5"
                component="div"
              >
                {props.caption}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.desc}
              </Typography>
              <div className=" flex flex-wrap justify-end  ">
                <Button size="small" color="primary">
                  Selengkapnya...
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
