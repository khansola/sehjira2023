import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Card = {
  image: string;
  title: string;
  excerpt: string;
  created_at: string;
};

type Props = Card;

const RelatedCard = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center hover:scale-110 transition duration-500 ">
      <Card sx={{ maxWidth: 420, height: 520 }}>
        <div className="w-[100%] flex flex-wrap justify-center px-[7%] rounded-md  ">
          <Image
            src={props.image}
            alt={"vector.png"}
            width={370}
            height={160}
          ></Image>
        </div>
        <CardContent className="hover:text-white hover:bg-[#843C74]">
          <Typography
            className="text-left font-bold "
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
          <Typography
            className="text-left"
            gutterBottom
            variant="h6"
            component="div"
          >
            {props.excerpt}
          </Typography>
          <Typography
            className="text-left"
            gutterBottom
            variant="h6"
            component="div"
          >
            {props.created_at}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelatedCard;
