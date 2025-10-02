import { IProject } from "@/app/data";
import React from "react";
import Image from "../Image";
import SectionHeader from "../SectionHeader";
import ProjectText from "./ProjectText";
import StickyContianer from "./StickyContianer";

interface ItemProps {
  item: IProject;
}
const ProjectItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <ItemInfo item={item} />
      <div className="snap flex w-full flex-1 snap-x snap-mandatory gap-5 overflow-x-auto lg:flex-col">
        {item.ss.map((img, indx) => (
          <Image
            className="h-fit min-w-full snap-start rounded-lg object-cover object-top"
            key={indx}
            src={img}
            alt={img}
          />
        ))}
      </div>
    </div>
  );
};

interface ItemInfoProps {
  item: IProject;
}
const ItemInfo: React.FC<ItemInfoProps> = ({ item }) => {
  return (
    <StickyContianer className="top-20 left-0 h-fit flex-1 lg:sticky">
      <div>
        <SectionHeader className="mb-4">PROJECTS</SectionHeader>
        <h1 className="mb-8 text-4xl font-semibold">{item.title}</h1>
        <ProjectText item={item}>{item.description}</ProjectText>
      </div>
    </StickyContianer>
  );
};
export default ProjectItem;
