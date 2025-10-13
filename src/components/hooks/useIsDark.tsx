import { useEffect, useState } from "react";

const useIsDark = () => {
  const [IsDark, setIsDark] = useState(false);
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return IsDark;
};

export default useIsDark;
