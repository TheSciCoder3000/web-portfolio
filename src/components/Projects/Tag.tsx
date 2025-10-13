import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Badge } from "../ui/badge";
import { ITag } from "@//lib/data";

const Tag: React.FC<ITag> = ({ title, description, color, bkg }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge
          className="cursor-pointer select-none"
          style={{ backgroundColor: bkg, color }}
        >
          {title}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm font-light text-gray-400">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Tag;
