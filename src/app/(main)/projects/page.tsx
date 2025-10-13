import React from "react";
import type { TransformCollectionWithSelect } from "payload";

export default async function ProjectsPage(): Promise<React.ReactElement> {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl">Projects</h1>
      <ul className="mt-6 space-y-6"></ul>
    </div>
  );
}
