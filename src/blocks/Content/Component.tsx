import { cn } from "@/utilities/ui";
import React from "react";
import RichText from "@//components/RichText";

import type { ContentBlock as ContentBlockProps } from "@/payload-types";

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props;

  const colsSpanClasses = {
    full: "lg:col-span-12",
    half: "lg:col-span-6",
    oneThird: "lg:col-span-4",
    twoThirds: "lg:col-span-8",
  };

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 gap-x-16 gap-y-4 lg:grid-cols-12">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { richText, size } = col;

            return (
              <div
                className={cn(`col-span-4 ${colsSpanClasses[size!]}`, {
                  "md:col-span-2": size !== "full",
                })}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};
