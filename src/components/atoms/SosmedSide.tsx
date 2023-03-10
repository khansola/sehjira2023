import React from "react";
import Link from "next/link";
import Image from "next/image";

const SosmedSide = () => {
  return (
    <>
      <div className="flex flex-col justify-center fixed mt-36 top-10 z-50">
        <Link href="www.facebook.com">
          <Image
            src="/images/Facebook.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.twitter.com">
          <Image src="/images/Twitter.svg" alt="image" width={50} height={50} />
        </Link>
        <Link href="www.instagram.com">
          <Image
            src="/images/Instagram.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.linkedin.com">
          <Image
            src="/images/LinkedIn.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.youtube.com">
          <Image src="/images/YouTube.svg" alt="image" width={50} height={50} />
        </Link>
      </div>
    </>
  );
};

export default SosmedSide;
