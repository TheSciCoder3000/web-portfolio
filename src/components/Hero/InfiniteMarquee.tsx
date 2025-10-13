"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const InfiniteMarquee = ({
  className,
  children,
}: React.ComponentProps<"div">) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={clsx("overflow-x-clip", className)}>
      <div
        ref={marqueeRef}
        className="relative flex w-fit min-w-max opacity-50"
      >
        {Array.from(Array(8)).map((item) => (
          <div key={item} className="flex shrink-0 items-center gap-20 pr-20">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
