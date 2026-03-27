"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();
  const isRoot = path === "/";

  return (
    <>
      <header className="desktop:m-5 desktop:my-5 mx-3 my-3 mb-0 flex items-center justify-between">
        <div className="relative block h-6 w-21.25">
          <Image
            src="/images/shared/logo.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <Link
          href={isRoot ? "/0" : "/"}
          className="text-preset-5 tablet:text-preset-6 text-grey-400 uppercase hover:text-black"
        >
          {isRoot ? "Start" : "Stop"} slideshow
        </Link>
      </header>
      <div className="bg-grey-150 desktop:m-5 tablet:my-5 my-3 h-px"></div>
    </>
  );
};
