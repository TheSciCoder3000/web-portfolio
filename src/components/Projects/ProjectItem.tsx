import { IProject } from "@//lib/data";
import React from "react";
import Image from "../Image";
import SectionHeader from "../SectionHeader";
import ProjectText from "./ProjectText";
import StickyContianer from "./StickyContianer";
import Tag from "./Tag";
import { Project } from "@/payload-types";
import Link from "next/link";
import { Route } from "next";

interface ItemProps {
  item: Project;
}
const ProjectItem: React.FC<ItemProps> = ({ item }) => {
  console.log(item.images);
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <ItemInfo item={item} />
      <div className="snap flex w-full flex-1 snap-x snap-mandatory gap-5 overflow-x-auto lg:flex-col">
        {item.images?.map(
          (img) =>
            typeof img !== "string" && (
              <Image
                className="h-fit min-w-full snap-start rounded-lg object-cover object-top"
                key={img.id}
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}${img.sizes?.medium?.url}`}
                alt={img.alt}
              />
            ),
        )}
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
          {item.categories?.map(
            (tag, indx) =>
              typeof tag !== "string" && <Tag {...tag} key={indx} />,
          )}
        </div>
        <ProjectText item={item}>
          {item.description}
          <br />
          <Link
            className="text-[#2cff7d]"
            href={`/projects/${item.slug}` as Route}
          >
            Learn More
          </Link>
        </ProjectText>
      </div>
    </StickyContianer>
  );
};
export default ProjectItem;
