import React, { useState as Use } from "react";
import { api } from "@/utils/api";

const index = () => {
  const [name, setName] = Use<string>("");
  const [image, setImage] = Use<string>("");

  const kirim = () => {
    api
      .post(
        "/api/contact-forms?populate=*",

        {
          data: {
            name: name,
            email: "example@gmail.com",
            phone_number: "081818181",
            organization: "discord",
            message: "konajsjssskkskksksksk",
            image: image,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(name);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="file" onChange={(e: any) => setImage(e.target.files)} />
      <p onClick={() => kirim()}>kirim</p>
    </div>
  );
};

export default index;
