"use client";

import { useIsMobile } from "@/lib/hooks/useIsMobile";
import Image from "next/image";
import { Modal } from "./Modal";

export const ArtImage = ({
  galleryImage,
  alt,
  heroImages,
}: {
  heroImages: {
    small: {
      src: string;
      width: number;
      height: number;
    };
    large: {
      src: string;
      width: number;
      height: number;
    };
  };
  galleryImage: {
    src: string;
    width: number;
    height: number;
  };
  alt: string;
}) => {
  const isMobile = useIsMobile();
  const image = isMobile ? heroImages.small : heroImages.large;

  return (
    <div className="relative max-w-[475px]">
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        className="object-contain"
        priority
      />
      <Modal image={galleryImage} />
    </div>
  );
};
