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
  return (
    <div>
      <ProgressBar dataLength={dataLength} currentItemIndex={Number(id)} />
      <div className="flex justify-between px-2 py-2">
        <div>
          <div className="text-preset-3 text-black">{item.name}</div>
          <div className="text-preset-4 text-black/75">{item.artist.name}</div>
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/${Number(id) - 1}`}>
            <PreviousIcon />
          </Link>
          <Link href={`/${Number(id) + 1}`}>
            <NextIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
