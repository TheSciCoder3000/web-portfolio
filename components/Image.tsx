import React from "react";
import NextImage from "next/image";
import clsx from "clsx";

interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, className, priority }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      priority={priority}
      width={0}
      height={0}
      sizes="100vw"
      className={clsx("", className)}
    />
  );
};

export default Image;
