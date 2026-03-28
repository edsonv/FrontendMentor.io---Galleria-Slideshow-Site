"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();
  const isRoot = path === "/";

  return (
    <>
      <header className="desktop:mx-5 desktop:mt-5 mx-3 mt-3 flex items-center justify-between">
        <h1 className="sr-only">Galleria.</h1>
        <div className="relative h-6 w-21.25">
          <Image
            src="/images/shared/logo.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <nav>
          <Link
            href={isRoot ? "/0" : "/"}
            className="text-preset-5 tablet:text-preset-6 text-grey-400 uppercase hover:text-black"
          >
            {isRoot ? "Start" : "Stop"} slideshow
          </Link>
        </nav>
      </header>
      <div className="bg-grey-150 desktop:m-5 tablet:my-5 my-3 h-px"></div>
    </>
  );
};
