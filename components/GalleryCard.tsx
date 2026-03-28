import Image from "next/image";
import Link from "next/link";

export const GalleryCard = ({
  item,
  originalIndex,
}: {
  item: Painting;
  originalIndex: number;
}) => {
  return (
    <Link
      href={`/${originalIndex}`}
      className="card relative hover:mask-[linear-gradient(to_top,rgba(0,0,0,0.9)_16%,rgba(0,0,0,.5)_100%)] focus:mask-[linear-gradient(to_top,rgba(0,0,0,0.9)_16%,rgba(0,0,0,.5)_100%)]"
    >
      <figure className="relative">
        <picture className="block">
          <Image
            src={item.images.thumbnail.src}
            alt={item.name}
            width={item.images.thumbnail.width}
            height={item.images.thumbnail.height}
            className="h-auto w-full object-contain"
          />
        </picture>
        <figcaption className="absolute bottom-0 left-0 z-20 p-4">
          <h3 className="text-preset-2-mobile text-white">{item.name}</h3>
          <p className="text-preset-5 mt-1 text-white">{item.artist.name}</p>
        </figcaption>
      </figure>
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-linear-[to_top,rgba(0,0,0,.84),rgba(0,0,0,0)]"></div>
    </Link>
  );
};
