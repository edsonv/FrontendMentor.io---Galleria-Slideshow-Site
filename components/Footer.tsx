import cn from "clsx";
import Link from "next/link";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { ProgressBar } from "./ProgressBar";

interface FooterProps {
  item: Painting;
  dataLength: number;
  id: string;
}

export const Footer = ({ item, dataLength, id }: FooterProps) => {
  const isFirstItem = Number(id) === 0;
  const isLastItem = Number(id) === dataLength - 1;

  return (
    <div className="sticky bottom-0 bg-white">
      <ProgressBar dataLength={dataLength} currentItemIndex={Number(id)} />
      <div className="tablet:px-5 tablet:py-3.25 flex justify-between px-2 py-2">
        <div>
          <div className="text-preset-3 text-black">{item.name}</div>
          <div className="text-preset-4 text-black/75">{item.artist.name}</div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/${Number(id) - 1}`}
            aria-disabled={isFirstItem}
            className={cn(
              "hover:opacity-15",
              isFirstItem &&
                "pointer-events-none cursor-not-allowed opacity-15",
            )}
            tabIndex={isFirstItem ? -1 : undefined}
          >
            <PreviousIcon className="tablet:h-3 tablet:w-3 h-2 w-2" />
          </Link>
          <Link
            href={`/${Number(id) + 1}`}
            aria-disabled={isLastItem}
            className={cn(
              "hover:opacity-15",
              isLastItem && "pointer-events-none cursor-not-allowed opacity-15",
            )}
            tabIndex={isLastItem ? -1 : undefined}
          >
            <NextIcon className="tablet:h-3 tablet:w-3 h-2 w-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
