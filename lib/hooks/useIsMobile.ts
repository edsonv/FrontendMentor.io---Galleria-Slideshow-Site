import { useWindowWidth } from "./useWindowWidth";

export const useIsMobile = () => {
  const width = useWindowWidth();
  const isMobile = width !== null && width < 768;
  return isMobile;
};
