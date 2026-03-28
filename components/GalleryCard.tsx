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
      key={item.name}
      className="card relative hover:mask-[linear-gradient(to_top,rgba(0,0,0,0.9)_16%,rgba(0,0,0,.5)_100%)] focus:mask-[linear-gradient(to_top,rgba(0,0,0,0.9)_16%,rgba(0,0,0,.5)_100%)]"
    >
      <figure>
        <picture className="block">
          <Image
            src={item.images.thumbnail.src}
            alt={item.name}
            width={item.images.thumbnail.width}
            height={item.images.thumbnail.height}
            className="h-auto w-full object-contain"
            priority
          />
        </picture>
        <figcaption className="absolute bottom-0 left-0 z-20 p-4">
          <div className="text-preset-2-mobile text-white">{item.name}</div>
          <div className="text-preset-5 mt-1 text-white">
            {item.artist.name}
          </div>
        </figcaption>
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-linear-[to_top,rgba(0,0,0,.84),rgba(0,0,0,0)]"></div>
      </figure>
    </Link>
  );
};
