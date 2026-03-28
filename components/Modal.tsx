"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ViewImageIcon } from "./ViewImageIcon";

export const Modal = ({
  image,
}: {
  image: { src: string; width: number; height: number };
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewImage = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const modalRoot =
    typeof document !== "undefined" ? document.getElementById("modal-root") : null;

  return (
    <>
      <button
        className="text-preset-7 tablet:bottom-2 tablet:top-auto absolute top-2 left-2 flex cursor-pointer items-center gap-2 bg-black px-2 py-1.75 text-[10px] text-white uppercase hover:bg-white/25"
        onClick={handleViewImage}
      >
        <ViewImageIcon className="h-1.5 w-1.5" />
        View Image
      </button>
      {modalRoot &&
        showModal &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85">
            <div
              className={`flex flex-col desktop:max-w-[${image.width}px] desktop:max-h-[${image.height}px] tablet:mx-6.25 mx-3.25`}
            >
              <button
                onClick={handleViewImage}
                className="text-preset-3 mb-4 cursor-pointer self-end text-white uppercase hover:text-white/25"
              >
                Close
              </button>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt=""
              />
            </div>
          </div>,
          modalRoot,
        )}
    </>
  );
};
