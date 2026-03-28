import { ArtDescription } from "@/components/ArtDescription";
import { ArtImage } from "@/components/ArtImage";
import { Footer } from "@/components/Footer";
import data from "@/lib/data.json";
import Link from "next/link";

const SlidePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const item = data[Number(id)] as Painting;

  return (
    <>
      <main className="tablet:mb-7 tablet:mx-5 desktop:grid desktop:grid-cols-[848px_476px] desktop:gap-4.5 desktop:justify-center desktop:items-center mx-3 mb-9.75 flex-1">
        <div className="relative mb-12.25">
          <ArtImage
            heroImages={item.images.hero}
            galleryImage={item.images.gallery}
            alt={item.name}
          />

          <ArtDescription item={item} />
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
      </main>

      <Footer item={item} dataLength={data.length} id={id} />
    </>
  );
};

export default SlidePage;
