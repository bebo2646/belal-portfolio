import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const data = {
  home: {
    name: "Belal Ahmed",
    description: "The #creative__frontend developer who builds #immersive experiences.", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "/Belal_Ahmed_CV.html",
  },
  sidebar: {
    links: [
      {
        name: "git hub",
        link: "https://github.com/bebo2646",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/belal-ahmed-b53499191",
        icon: Linkedin,
      },
    ],
  },
  about: {
    description:
      "I'm Belal Ahmed, a Creative Frontend Developer dedicated to building immersive, high-performance, and visually stunning web applications.",
    image: "/imgs/Belal.jpg",
    numbers: [
      { name: "PROJECTS-COMPLETED", number: 2 },
      { name: "SKILLS-MASTERED", number: 12 },
    ],
  },
  projects: {
    description: "Innovating the web, one project at a time.",
    projects: [
      {
        id: 1,
        title: "Learning Hub",
        description: "An educational platform designed to display courses and learning materials with a responsive modern UI.",
        image: "/imgs/learning-hub.png",
        githubLink: "#",
        previewLink: "https://bjmal4238-maker.github.io/Learning_Hub/",
      },
      {
        id: 2,
        title: "Food Point Restaurant",
        description: "Modern responsive restaurant web app with smooth UI and clean user experience.",
        image: "/imgs/food-point.png",
        githubLink: "#",
        previewLink: "https://food-point1.netlify.app/",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "dart",
        src: "/skills/dart.svg",
        link: "https://dart.dev/",
      },
      {
        id: 9,
        name: "flutter",
        src: "/skills/flutter.svg",
        link: "https://flutter.dev/",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
    ],
  },
  contact: {
    email: "belal@gmail.com",
    phone: "+20 115 197 0493",
    location: "Cairo, Egypt",
  },
};

export default data;
