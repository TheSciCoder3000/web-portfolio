"use client";

import React, { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import clsx from "clsx";

const Navbar = () => {
  const [isDown, setIsDown] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let scrollY = window.scrollY;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsDown(window.scrollY > scrollY);
      scrollY = window.scrollY;
    };

    addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-50 h-fit w-full px-4 py-4 transition-transform duration-300",
        scrollY > 200 ? "bg-gray-900 shadow-md" : "bg-transparent",
        isDown ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex max-w-[80rem] justify-between">
        <h2 className="font-semibold">
          {"<"}
          <span className="text-[#4daefd]">neurocoder</span>
          {"/>"}
        </h2>
        <AnimatedThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
