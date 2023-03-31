import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
  href?: string;
  image?: string;
  alt?: string | "";
};

const Links = (props: Props) => {
  return (
    <>
      <Link href={props.href!}>
        {props.title}
        {props.image ? (
          <Image
            src={props.image}
            alt={props.alt || "image"}
            height={36}
            width={36}
          />
        ) : (
          <div></div>
        )}
      </Link>
    </>
  );
};

export default Links;
