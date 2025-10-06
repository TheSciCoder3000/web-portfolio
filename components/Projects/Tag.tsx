import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Badge } from "../ui/badge";
import { Category } from "@/types/sanity";

const Tag: React.FC<Category> = ({
  name,
  description,
  foregroundColor,
  backgroundColor,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge
          className="cursor-pointer select-none"
          style={{
            backgroundColor: backgroundColor.hex,
            color: foregroundColor.hex,
          }}
        >
          {name}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm font-light text-gray-400">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Tag;
