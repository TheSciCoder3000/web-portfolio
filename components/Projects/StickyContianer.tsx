"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const StickyContianer = ({
  children,
  className,
}: React.ComponentProps<"div">) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current?.parentElement,
            toggleActions: "play none none reverse",
            start: "bottom center",
            // markers: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={clsx(className)}>
      {children}
    </div>
  );
};

export default StickyContianer;
