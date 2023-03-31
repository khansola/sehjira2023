import Image from "next/image";

type props = {
  src: string;
  width: number;
  quality: number | 75;
};

const myLoader = ({ src, width, quality }: props) => {
  return `https://example.com/${src}?w=${width}&q=${quality}`;
};

const ImageContent = () => {
  return (
    <div className="w-full md:flex md:items-center md:w-auto hidden">
      <Image
        // loader={myLoader}
        className="h-[100%] w-[100%]"
        src="/images/Container9.png"
        alt="image"
        width={675.68}
        height={919}
      />
      <div className="min-h-screen w-full cursor-pointer md:hidden block"></div>
    </div>
  );
};

export default ImageContent;
