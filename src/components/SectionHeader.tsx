import clsx from "clsx";
import React from "react";

const SectionHeader = ({ children, className }: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={clsx(
        "w-fit rounded-lg bg-gray-300 px-3 py-0.5 text-xs font-bold text-black uppercase",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default SectionHeader;
