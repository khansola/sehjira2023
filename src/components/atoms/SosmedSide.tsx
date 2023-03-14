import React from "react";
import Link from "next/link";
import Image from "next/image";

const SosmedSide = () => {
  return (
    <>
      <div className="flex flex-col justify-center fixed mt-36 top-10 z-50">
        <a
          className="hover:scale-110 transition"
          href="https://www.facebook.com"
        >
          <Image
            src="/images/Facebook.svg"
            alt="image"
            width={50}
            height={50}
          />
        </a>
        <a
          className="hover:scale-110 transition"
          href="https://www.twitter.com"
        >
          <Image src="/images/Twitter.svg" alt="image" width={50} height={50} />
        </a>
        <a className="hover:scale-110" href="https://www.instagram.com">
          <Image
            src="/images/Instagram.svg"
            alt="image"
            width={50}
            height={50}
          />
        </a>
        <a
          className="hover:scale-110 transition"
          href="https://www.linkedin.com"
        >
          <Image
            src="/images/LinkedIn.svg"
            alt="image"
            width={50}
            height={50}
          />
        </a>
        <a
          className="hover:scale-110 transition"
          href="https://www.youtube.com"
        >
          <Image src="/images/YouTube.svg" alt="image" width={50} height={50} />
        </a>
      </div>
    </>
  );
};

export default SosmedSide;
