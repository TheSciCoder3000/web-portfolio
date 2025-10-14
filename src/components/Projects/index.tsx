import { projects } from "@//lib/data";
import React from "react";
import ProjectItem from "./ProjectItem";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";

async function Project() {
  const payload = await getPayload({ config: payloadConfig });
  const projects = await payload
    .find({
      collection: "projects",
      limit: 100,
      sort: "-createdAt",
    })
    .then((res) => res.docs);

  return (
    <div className="w-full overflow-hidden md:overflow-visible">
      <div id="project" className="mx-auto max-w-[80rem] space-y-40 px-4 py-35">
        {projects.map((item, indx) => (
          <ProjectItem item={item} key={indx} />
        ))}
      </div>
    </div>
  );
}

export default Project;
