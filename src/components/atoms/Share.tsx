import React from "react";
import Image from "next/image";
import Link from "next/link";

function Share() {
  return (
    <div className="">
      <ul className="w-full flex gap-3 mt-5 px-[7%]">
        <a className="hyperlink hover:scale-110" href="www.facebook.com">
          <Image
            src="/static/svgs/Facebook.svg"
            alt={"Facebook.png"}
            width={36}
            height={36}
          ></Image>
        </a>
        <a className="hyperlink hover:scale-110" href="www.Twitter.com">
          <Image
            src="/static/svgs/Twitter.svg"
            alt={"Twitter.png"}
            width={36}
            height={36}
          ></Image>
        </a>
        <a className="hyperlink hover:scale-110" href="www.Instagram.com">
          <Image
            src="/static/svgs/Instagram.svg"
            alt={"Intagram.png"}
            width={36}
            height={36}
          ></Image>
        </a>
        <a className="hyperlink hover:scale-110" href="www.Linkedin.com">
          <Image
            src="/static/svgs/Linkedin.svg"
            alt={"Intagram.png"}
            width={36}
            height={36}
          ></Image>
        </a>
      </ul>
    </div>
  );
}

export default Share;
