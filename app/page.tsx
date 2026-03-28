"use client";

import { GalleryCard } from "@/components/GalleryCard";
import data from "@/lib/data.json";
import { useWindowWidth } from "@/lib/hooks/useWindowWidth";
import { masonry } from "@/lib/utils/masonryBuilder";
import { useMemo } from "react";

function HomePage() {
  const items = data as Painting[];
  const width = useWindowWidth();
  const numCols = useMemo(() => {
    if (!width) return 1;
    if (width >= 1440) return 4;
    if (width >= 768) return 2;

    return 1;
  }, [width]);

  const columns = useMemo(() => masonry({ items, numCols }), [items, numCols]);

  return (
    <main className="tablet:mx-7 tablet:mb-7 desktop:mx-5 desktop:mb-5 mx-4 mb-4 flex gap-5">
      {columns.map((column, colIndex) => {
        return (
          <ul key={colIndex} className="flex flex-1 flex-col gap-5">
            {column.map((item) => {
              const originalIndex = items.indexOf(item);

              return (
                <li key={item.name + originalIndex}>
                  <GalleryCard item={item} originalIndex={originalIndex} />
                </li>
              );
            })}
          </ul>
        );
      })}
    </main>
  );
}

export default HomePage;
