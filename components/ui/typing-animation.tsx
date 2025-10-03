"use client";

import { ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

interface TypingAnimationProps {
  children: ReactNode | ReactNode[];
  className?: string;
  duration?: number;
  onAnimationComplete?: () => void;
}

export function TypingAnimation({
  children,
  className,
  duration = 0.4,
  onAnimationComplete,
}: TypingAnimationProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const split = new SplitText(containerRef.current);

      gsap.fromTo(
        split.chars,
        {
          display: "none",
        },
        {
          display: "inline",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
          stagger: duration / split.chars.length,
          onComplete: onAnimationComplete,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <p
      ref={containerRef}
      className={cn(
        "text-4xl leading-[5rem] font-bold tracking-[-0.02em]",
        className,
      )}
    >
      {children}
    </p>
  );
}
