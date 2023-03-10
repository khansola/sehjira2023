import React from "react";
import Image from "next/image";
import Link from "next/link";

function Share() {
  return (
    <div className="full body">
      <div>
        <ul className="w-full flex mt-5 px-[7%] gap-3  ">
          <li>
            <p>Bagikan</p>
          </li>
          <a className="hyperlink" href="www.facebook.com">
            <Image
              src="/images/Facebook2.svg"
              alt={"Facebook.png"}
              width={36}
              height={36}
            ></Image>
          </a>
          <a className="hypera" href="www.instagram.com">
            <Image
              src="/images/Instagram2.svg"
              alt={"Intagram.png"}
              width={36}
              height={36}
            ></Image>
          </a>
          <a className="hyperlink" href="www.Twitter.com">
            <Image
              src="/images/Twitter2.svg"
              alt={"Twitter.png"}
              width={36}
              height={36}
            ></Image>
          </a>
          <a className="hyperlink" href="www.Youtube.com">
            <Image
              src="/images/Youtube2.svg"
              alt={"Youtube.png"}
              width={36}
              height={36}
            ></Image>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Share;
