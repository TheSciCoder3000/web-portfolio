import React from "react";
import Image from "../Image";
import SectionHeader from "../SectionHeader";
import ProjectText from "./ProjectText";
import StickyContianer from "./StickyContianer";
import Tag from "./Tag";
import { Project } from "@/types/sanity";
import Link from "next/link";
import { Route } from "next";

interface ItemProps {
  item: Project;
}
const ProjectItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <ItemInfo item={item} />
      <div className="snap flex w-full flex-1 snap-x snap-mandatory gap-5 overflow-x-auto lg:flex-col">
        {item.images!.map((img, indx) => (
          <Image
            className="h-fit min-w-full snap-start rounded-lg object-cover object-top"
            key={indx}
            src={img.asset.url}
            alt={img.asset.url}
          />
        ))}
      </div>
    </div>
  );
};

interface ItemInfoProps {
  item: Project;
}
const ItemInfo: React.FC<ItemInfoProps> = ({ item }) => {
  return (
    <StickyContianer className="top-20 left-0 h-fit flex-1 lg:sticky">
      <div>
        <SectionHeader className="mb-4">PROJECTS</SectionHeader>
        <h1 className="mb-4 text-4xl font-semibold">{item.title}</h1>
        <div className="mb-5 flex flex-wrap gap-2">
          {item.categories.map((tag, indx) => (
            <Tag {...tag} key={indx} />
          ))}
        </div>
        <ProjectText item={item}>
          {item.description}
          <br />
          <Link
            className="mt-4 text-sm text-[#2cff7d] transition-colors duration-300 hover:text-[#4daefd]"
            href={`/project/${item.slug.current}` as Route}
          >
            Learn More
          </Link>
        </ProjectText>
      </div>
    </StickyContianer>
  );
};
export default ProjectItem;
