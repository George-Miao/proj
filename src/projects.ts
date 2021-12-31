// TODO: impl indicator
export interface Indicator {
  icon: string;
  color?: string;
  label?: string;
}

export interface Item {
  name: string;
  icon?: string;
  description: string;
  isPrivate?: boolean;
  link?: string;
  github?: string;
  healthCheck?: string;
  indicators?: Indicator[];
}

export interface Category {
  name: string;
  description?: string;
  items: Item[];
  icon?: string;
}

export const defineProjects = (val: Category[]) => val;

const projects = defineProjects([
  {
    name: "Tharsis",
    description: "My home server rack",
    icon: "bx:bxs-planet",
    items: [
      {
        name: "Proxmox",
        isPrivate: true,
        description: "description", //TODO
        icon: "cib:proxmox",
      },
      {
        name: "OPNsense",
        isPrivate: true,
        description: "description", //TODO
        icon: "simple-icons:opnsense",
      },
      {
        name: "Prometheus",
        isPrivate: true,
        description: "description", //TODO
        icon: "simple-icons:prometheus",
      },
      {
        name: "Grafana",
        isPrivate: true,
        description: "description", //TODO
        icon: "simple-icons:grafana",
      },

      {
        name: "Teamcity",
        isPrivate: true,
        description: "description", //TODO
        icon: "simple-icons:teamcity",
      },
      {
        name: "SSH",
        isPrivate: true,
        description: "description", //TODO
        icon: "mdi:ssh",
      },
    ],
  },
  {
    name: "Sites",
    icon: "ic:twotone-web-asset",
    description: "Deployed and maintaining",
    items: [
      {
        name: "Index Page",
        link: "https://miao.dev",
        github: "https://github.com/George-Miao/index-page",
        description: "Miao.dev Index page",
        icon: "maki:entrance-alt1",
      },
      {
        name: "Blog",
        link: "https://blog.miao.dev",
        github: "https://github.com/George-Miao/GlogHexo",
        description:
          "My blog. Use hexo for generation. Written in Markdown, less and swig",
        icon: "cib:hexo",
      },
      {
        name: "Typings.dev",
        link: "https://typings.dev",
        github: "https://github.com/George-Miao/typings.dev",
        description: "description", //TODO
        icon: "ion:logo-vue",
      },
      {
        name: "Pop.tg",
        link: "https://pop.tg",
        github: "https://github.com/Pop-tg/main",
        description:
          "URL shortener, built with Svelte, Typescript and Cloudflare Worker",
        icon: "cib:cloudflare",
      },

      {
        name: "Rushia button",
        link: "https://rushia.moe",
        github: "https://github.com/Rushia-cn/Rushia-button",
        description: "Button panel of vtuber, Uruha Rushia",
        icon: "vs:butterfly",
      },
    ],
  },
  {
    name: "Projects",
    icon: "eos-icons:flask",
    description: "Works have done and doing",
    items: [
      {
        name: "Mail List Rss",
        icon: "cib:rust",
        github: "https://github.com/George-Miao/mail-list-rss",
        healthCheck: "https://rss.miao.do/health",
        description: "description", //TODO
      },
      {
        name: "Shot",
        icon: "cib:rust",
        github: "https://github.com/George-Miao/shot",
        description: "description", //TODO
      },
      {
        name: "Clashctl",
        icon: "cib:rust",
        github: "https://github.com/George-Miao/clashctl",
        description: "description", //TODO
      },
      {
        name: "Knotify telegram",
        icon: "akar-icons:telegram-fill",
        github: "https://github.com/George-Miao/knotify-telegram",
        description: "description", //TODO
      },
      {
        name: "Golden Axe",
        icon: "akar-icons:telegram-fill",
        github: "https://github.com/suisei-cn/golden-axe-rs",
        description: "description", //TODO
      },
      {
        name: "RSS worker",
        icon: "cib:cloudflare",
        github: "https://github.com/George-Miao/rss-worker",
        description: "description", //TODO
      },
    ],
  },
  {
    name: "Misc",
    icon: "ls:etc",
    description: "Other things",
    items: [
      {
        name: "Bitwarden",
        icon: "simple-icons:bitwarden",
        isPrivate: true,
        description: "Opensource password manager",
      },
      {
        name: "Upptime status",
        icon: "ic:outline-monitor-heart",
        link: "https://status.miao.dev",
        description: "description", //TODO
      },
    ],
  },
]);

export { projects };
