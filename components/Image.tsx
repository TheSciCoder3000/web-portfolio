"use client";

import React from "react";
import NextImage from "next/image";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  unoptimized?: boolean;
  className?: string;
}
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  priority,
  unoptimized,
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      priority={priority}
      width={0}
      height={0}
      unoptimized={unoptimized}
      sizes="100vw"
      className={clsx("", className)}
      onLoad={() => ScrollTrigger.refresh()}
    />
  );
};

export default Image;
