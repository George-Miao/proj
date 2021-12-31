import { projects, Category } from "./projects";

import "./main.css";

declare global {
  interface Window {
    projects: Category[];
  }
}

console.log(projects);
window.projects = projects;
