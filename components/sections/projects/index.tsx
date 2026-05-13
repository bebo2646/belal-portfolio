"use client";
import React, { useRef } from "react";

import ProjectCard from "./project-card";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function ProjectsSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div ref={ref} id="projects" className="w-full py-20 container text-sm md:text-base">
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-4xl md:text-6xl text-gradient-primary mb-4 font-bold">
          <span className="text-secondary">{"// "}</span>
          Selected Work
        </h1>
        <p className="max-w-2xl text-muted-foreground text-lg">
          {data.projects.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        {data.projects.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
