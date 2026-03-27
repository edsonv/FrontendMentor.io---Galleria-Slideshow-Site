"use client";

import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";
import data from "@/lib/data.json";
import { useWindowWidth } from "@/lib/hooks/useWindowWidth";
import cn from "clsx";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const SlidePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const width = useWindowWidth();
  const item = data[Number(id)] as Painting;

  const isMobile = width !== null && width < 768;
  const image = isMobile ? item.images.hero.small : item.images.hero.large;

  return (
    <>
      <div className="tablet:mb-7 tablet:mx-5 desktop:grid desktop:grid-cols-[848px_476px] desktop:gap-4.5 desktop:justify-center desktop:items-center mx-3 mb-9.75 flex-1">
        <div className="relative mb-12.25">
          <div className="relative max-w-[475px]">
            <Image
              src={image.src}
              alt={item.name}
              width={image.width}
              height={image.height}
              className="object-contain"
              priority
            />
            <Modal image={item.images.gallery} />
          </div>

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
        </div>

        <div>
          <div className="text-preset-1 text-grey-100 tablet:text-left tablet:text-[200px] text-right">
            {item.year}
          </div>
          <div className="tablet:max-w-[457px] tablet:mx-auto tablet:-mt-17.5 -mt-4.25 flex flex-col gap-8">
            <div className="text-preset-3 text-grey-400">
              {item.description}
            </div>
            <Link
              href={item.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-preset-5 text-grey-400 uppercase hover:text-black"
            >
              Go to source
            </Link>
          </div>
        </div>
      </div>

      <Footer item={item} dataLength={data.length} id={id} />
    </>
  );
};

export default SlidePage;
