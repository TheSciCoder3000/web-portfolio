"use client";

import React from "react";
import {
  AdvancedMarker,
  APIProvider,
  ColorScheme,
  Map,
} from "@vis.gl/react-google-maps";
import LiquidEther from "./LiquidEther";
import useIsDark from "../hooks/useIsDark";
import useMediaQuery from "../hooks/useMediaQuery";

const AnimatedHeroBkg = () => {
  const IsDark = useIsDark();
  const IsMobile = useMediaQuery({ maxWidth: 768 });

  const position = {
    lat: 13.887,
    lng: 120.6569,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY!}>
      <div className="relative h-full w-full">
        {IsMobile ? (
          <Map
            className="h-1/3 w-full"
            disableDefaultUI
            gestureHandling="none"
            colorScheme={ColorScheme.DARK}
            zoom={6}
            center={position}
            mapId={process.env.NEXT_PUBLIC_MAPS_ID}
          >
            <AdvancedMarker
              title="location"
              position={position}
            ></AdvancedMarker>
          </Map>
        ) : (
          <>
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
          </>
        )}
      </div>
    </APIProvider>
  );
};

export default AnimatedHeroBkg;
