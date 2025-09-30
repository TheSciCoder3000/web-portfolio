import React from "react";
import NextImage from "next/image";
import clsx from "clsx";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={clsx("", className)}
    />
  );
};

export default Image;
