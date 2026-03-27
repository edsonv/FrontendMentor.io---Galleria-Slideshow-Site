export function masonry({
  items,
  numCols,
}: {
  items: Painting[];
  numCols: number;
}) {
  const columns: Painting[][] = Array.from({ length: numCols }, () => []);
  items.forEach((item, index) => {
    const shift = index >= 10 ? 1 : 0;
    const colIndex = (index + shift) % numCols;
    columns[colIndex].push(item);
  });
  return columns;
}
