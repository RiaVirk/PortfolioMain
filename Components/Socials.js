import Link from "next/link";

import {
  RiYoutubeLine,
  RiFacebookLine,
  RiInstagramLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitterXLine,
  RiLinkedinBoxFill,
  RiXingLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* <Link href={""} className=" hover:text-space transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className=" hover:text-space transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className=" hover:text-space transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={""} className=" hover:text-space transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className=" hover:text-space transition-all duration-300">
        <RiDribbbleLine />
      </Link> */}

      <Link
        href={"https://www.linkedin.com/in/maria-virk/"}
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-space transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://www.xing.com/profile/Maria_Virk"}
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-space transition-all duration-300"
      >
        <RiXingLine />
      </Link>
      <Link
        href={"https://x.com/RiaVirk"}
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-space transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>
    </div>
  );
};

export default Socials;
