import "./main.css";

import { categories } from "./projects";
import { Proj } from "./types";

declare global {
  interface Window {
    proj: Proj;
  }
}

window.proj = {
  links: [
    {
      href: "https://github.com/George-Miao/proj",
      icon: "akar-icons:github-fill",
    },
    {
      href: "https://miao.dev",
      text: "home",
    },
  ],
  categories: categories,
};
