import { useState, useEffect } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function useProjectInView() {
  const [scope, animate] = useAnimate();
  const isProjectInView = useInView(scope, {
    once: false,
    amount: 0.25,
  });

  useEffect(() => {
    if (isProjectInView) {
      animate(".project-item", { opacity: 1, y: 0 }, { delay: stagger(0.15) });
    } else {
      animate(".project-item", { opacity: 0, y: 50 });
    }
  }, [isProjectInView]);

  return [scope];
}

export function useHeaderInView() {
  const [scopeOutline, animateOutline] = useAnimate();
  const isHeaderInView = useInView(scopeOutline, {
    once: false,
    amount: 0.3,
    // margin: "20px 0px 50px 0px",
  });
  useEffect(() => {
    console.log("header outline in view");
    if (isHeaderInView) {
      animateOutline(
        ".project-header",
        {
          y: "2rem",
          opacity: "20%",
        },
        { type: "linear" }
      );
      animateOutline(
        ".project-outline-header",
        {
          y: "15rem",
          opacity: "10%",
        },
        { type: "linear" }
      );
      animateOutline(
        ".project-outline-header-1",
        {
          y: "27rem",
          opacity: "5%",
        },
        { type: "linear" }
      );
    } else {
      animateOutline(".project-header", { y: 0, opacity: "0%" });
      animateOutline(".project-outline-header", { y: 0, opacity: "0%" });
      animateOutline(".project-outline-header-1", { y: 0, opacity: "0%" });
    }
  }, [isHeaderInView]);

  return [scopeOutline];
}
