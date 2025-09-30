import React from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 h-fit w-full px-4 py-4">
      <div className="mx-auto flex max-w-[80rem] justify-between">
        <h2 className="font-semibold">
          {"<"}neurocoder{"/>"}
        </h2>
        <AnimatedThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
