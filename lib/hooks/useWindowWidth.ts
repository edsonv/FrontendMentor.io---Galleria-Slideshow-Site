import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () =>
      setWidth(
        window.innerWidth != null
          ? window.innerWidth
          : document.documentElement && document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : document.body != null
              ? document.body.clientWidth
              : null,
      );
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
