"use client";

import { useIsMobile } from "@/lib/hooks/useIsMobile";
import cn from "clsx";
import Image from "next/image";

export const ArtDescription = ({ item }: { item: Painting }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "tablet:top-0 tablet:bottom-auto tablet:right-0 desktop:h-78 absolute -bottom-14",
        isMobile ? "w-35.25" : "w-55.75",
      )}
    >
      <div className="tablet:gap-3 tablet:p-0 tablet:px-8 tablet:pb-8 flex flex-col gap-1 bg-white p-3">
        <div className="text-preset-2-mobile tablet:text-preset-2 text-black">
          {item.name}
        </div>
        <div className="text-preset-4 text-grey-400 text-[15px]">
          {item.artist.name}
        </div>
      </div>

      <div className="desktop:absolute desktop:bottom-0 ml-2 block">
        <Image
          src={item.artist.image.src}
          width={isMobile ? 64 : item.artist.image.width}
          height={isMobile ? 64 : item.artist.image.height}
          alt={item.artist.name}
          className="tablet:mr-7 tablet:ml-auto desktop:ml-12"
        />
      </div>
    </div>
  );
};
