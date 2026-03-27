import { useMemo } from "react";

interface ProgressBarProps {
  dataLength: number;
  currentItemIndex: number;
}

export const ProgressBar = ({
  dataLength,
  currentItemIndex,
}: ProgressBarProps) => {
  const percentage = useMemo(() => {
    return ((currentItemIndex + 1) / dataLength) * 100;
  }, [dataLength, currentItemIndex]);

  return (
    <svg height="1" width="100%">
      <rect x="0" y="0" width="100%" height="1" fill="#E5E5E5" />
      <rect x="0" y="0" width={`${percentage}%`} height="1" fill="black" />
    </svg>
  );
};
