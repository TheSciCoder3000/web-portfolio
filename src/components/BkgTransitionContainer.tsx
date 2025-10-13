"use client";

import React, { ReactNode, useEffect } from "react";
import clsx from "clsx";
import useObserver from "./hooks/useObserver";

interface BkgTransitionContainerProps {
  className?: string;
  children: ReactNode | ReactNode[];
  color: string;
}

const BkgTransitionContainer: React.FC<BkgTransitionContainerProps> = ({
  className,
  children,
  color,
}) => {
  const [ref, isVisible] = useObserver();

  function removeDarkBgClasses(element: Element) {
    element.classList.forEach((cls) => {
      if (cls.startsWith("dark:bg-")) {
        element.classList.remove(cls);
      }
    });
  }

  useEffect(() => {
    const homePage = document.querySelector(".home-page");
    if (!homePage) return;

    if (isVisible) {
      removeDarkBgClasses(homePage);
      homePage.classList.add(`dark:bg-[${color}]`);
    } else if (homePage.classList.contains(`dark:bg-[${color}]`)) {
      removeDarkBgClasses(homePage);
      homePage.classList.add("dark:bg-gray-900");
    }
  }, [isVisible, color]);

  return (
    <div ref={ref} className={clsx("", className)}>
      {children}
    </div>
  );
};

export default BkgTransitionContainer;
