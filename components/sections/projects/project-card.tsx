"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type props = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    previewLink: string;
  };
};

export default function ProjectCard({ project }: props) {
  return (
    <div className="w-full max-w-full rounded-2xl bg-muted border hover:border-primary-foreground/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      <div className="flex justify-between flex-shrink-0 px-4 pt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe size={18} />
          <span>Web-Page</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block rounded-full size-3 bg-green-500 ml-auto" />
          <span className="block rounded-full size-3 bg-yellow-500" />
          <span className="block rounded-full size-3 bg-red-500 " />
        </div>
      </div>
      <div className="group relative aspect-video overflow-hidden cursor-pointer rounded-lg m-2 border border-white/5">
        <Image className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title} width={600} height={400} />
        <Link href={project.previewLink} target="_blank" className="size-full bg-black/40 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <ExternalLink size={32} className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform" />
        </Link>
      </div>
      <div className="px-4 py-2 w-full">
        <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
        <p className="text-muted-foreground h-[150px] overflow-hidden">{project.description}</p>
        <div className="space-x-2 my-7">
          <Button asChild variant="secondary">
            <Link href={project.previewLink} target="_blank">
              Live view
            </Link>
          </Button>
          <Button asChild variant="ghost" className="bg-muted-foreground/10">
            <Link href={project.githubLink} target="_blank">
              Git Hub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
