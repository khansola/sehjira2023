import React from "react";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Article from "@/components/molecules/Article";
import CardKotak from "@/components/atoms/CardKotak";

const index = () => {
  const card2 = [
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "First Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Second Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Third Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "First Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Second Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Third Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "First Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Second Article",
    },
    {
      image: "/images/s.jpg",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Third Article",
    },
  ];

  return (
    <BlankTemplate>
      <Article>
        {card2.map((e, i) => {
          return (
            <CardKotak
              key={i}
              image={e.image}
              caption={e.caption}
              title={e.title}
            />
          );
        })}
      </Article>
    </BlankTemplate>
  );
};

export default index;
