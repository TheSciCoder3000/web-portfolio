import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export interface IMedia {
  minWidth?: number;
  maxWidth?: number;
}

export default function useMediaQuery(mediaQuery: IMedia) {
  const [mediaMatch, setMediaMatch] = useState(false);

  useEffect(() => {
    function handleResize() {
      const dim = getWindowDimensions();
      const handleMediaState = () => {
        if (mediaQuery.maxWidth) {
          return mediaQuery.maxWidth >= dim.width;
        }

        if (mediaQuery.minWidth) {
          return mediaQuery.minWidth < dim.width;
        }

        return false;
      };
      setMediaMatch(handleMediaState);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return mediaMatch;
}
