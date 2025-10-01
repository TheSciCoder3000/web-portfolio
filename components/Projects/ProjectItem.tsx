import { IProject } from "@/app/data";
import React from "react";
import Image from "../Image";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import Link from "next/link";
import { Route } from "next";
import SectionHeader from "../SectionHeader";

interface ItemProps {
  item: IProject;
}
const ProjectItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-12 md:flex-row">
      <ItemInfo item={item} />
      <div className="flex w-full flex-1 gap-5 overflow-x-auto md:flex-col">
        {item.ss.map((img, indx) => (
          <Image
            className="h-fit min-w-full rounded-lg object-cover object-top"
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
    <div className="top-20 left-0 h-fit flex-1 md:sticky">
      <div>
        <SectionHeader className="mb-4">PROJECTS</SectionHeader>
        <h1 className="mb-8 text-4xl font-semibold">{item.title}</h1>
        <p className="mb-6 text-gray-400">{item.description}</p>
        <div className="flex gap-2 md:gap-12">
          <Button className="flex-1" asChild>
            <Link
              href={item.github as Route}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Source Code
            </Link>
          </Button>
          <Button className="flex-1" asChild>
            <Link
              href={item.live as Route}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiDesktop /> Preview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
