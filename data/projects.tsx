type ProjectType = {
  title: string;
  description: string;
  createdAt: string;
  image: string | any;
  technology?: {
    name: string;
    color?: string;
    url?: string;
  }[];
  source?: string;
  url?: string;
  font: string;
};

const next = {
  name: "nextjs",
  color: "bg-slate-600",
  url: "https://nextjs.org/",
};

const tw = {
  name: "tailwindcss",
  color: "bg-sky-600",
  url: "https://tailwindcss.com/",
};

const css = {
  name: "css",
  color: "bg-blue-600",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};

const shadcn = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com/",
};

const laravel = {
  name: "laravel",
  color: "bg-red-600",
  url: "https://laravel.com/",
};

const vue = {
  name: "Vue",
  color: "bg-green-600",
  url: "https://vuejs.org/",
};

const auth = {
  name: "authjs",
  color: "bg-red-600",
  url: "https://authjs.dev/",
};

const express = {
  name: "express",
  color: "bg-green-600",
  url: "https://expressjs.com/",
};

const firebase = {
  name: "firebase",
  color: "bg-yellow-600",
  url: "https://firebase.google.com/",
};

const project: ProjectType[] = [
  {
    title: "Siakad SMK Negeri 2 Rejang Lebong",
    image: "/projects/siakad.png",
    description:
      "Siakad SMK Negeri 2 Rejang Lebong, thesis project using the UCD (User Center Design) method.",
    createdAt: "2022-04",
    technology: [vue, tw, firebase],
    url: "https://web-smkn2-rl.vercel.app/",
    source: "https://github.com/paresiqbal/web-smkn2-rl",
    font: "font-doodle",
  },
  {
    title: "Ciptawiratirta",
    image: "/projects/cwt.png",
    description:
      "Ciptawiratirta, creating UI base on design with css and bootstrap.",
    createdAt: "2023-09",
    technology: [laravel, css],
    url: "https://ciptawiratirta.com/",
    source: "https://github.com/belajardarinol/cwt",
    font: "font-doodle",
  },
  {
    title: "Jiva",
    image: "/projects/jiva.png",
    description:
      "Jiva, freelance projects for anxiety and depression therapy applications.",
    createdAt: "2024-02",
    technology: [vue, tw, firebase],
    url: "https://jiva.vercel.app/",
    source: "https://github.com/paresiqbal/jiva",
    font: "font-doodle",
  },
  {
    title: "School App",
    image: "/projects/school.png",
    description:
      "School app, fullstack app create with next js and express js. For check attendance students and manage grades.",
    createdAt: "2024-03",
    technology: [next, tw, express, auth, shadcn],
    url: "https://school-teacher-beta.vercel.app/",
    source: "https://github.com/paresiqbal/school-teacher",
    font: "font-doodle",
  },
];

export default project;
