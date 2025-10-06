"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";

interface ParagraphProps {
  className?: string;
  marks: string[];
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  children,
  marks,
}) => {
  return (
    <span
      className={clsx(
        marks.includes("strong") && "font-bold text-white",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Paragraph;
