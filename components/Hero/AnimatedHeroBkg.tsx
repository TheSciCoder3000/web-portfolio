"use client";

import React from "react";
import LiquidEther from "./LiquidEther";
import useIsDark from "../hooks/useIsDark";

const AnimatedHeroBkg = () => {
  const IsDark = useIsDark();

  return (
    <div className="relative h-full w-full">
      {!IsDark && (
        <div className="pointer-events-none absolute top-0 left-0 z-5 h-full w-full backdrop-blur-[20px]" />
      )}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={11}
        cursorSize={IsDark ? 100 : 50}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
};

export default AnimatedHeroBkg;
