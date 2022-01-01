import { projects, Category } from "./projects";

import "./main.css";

const preview =
  "https://imagedelivery.net/b21oeeg7p6hqWEI-IA5xDw/0db4540a-72fb-4f01-6a04-a03ad5bf8400/public";

declare global {
  interface Window {
    projects: Category[];
  }
}

console.log(projects);
window.projects = projects;
