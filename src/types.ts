export interface Indicator {
  icon: string;
  class?: string;
  label?: string;
  link?: string;
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

export interface IconLink {
  href: string;
  icon: string;
}

export interface TextLink {
  href: string;
  text: string;
}

export type Link = IconLink | TextLink;

export interface Proj {
  links: Link[];
  categories: Category[];
}

export const defineCategories = (val: Category[]) => val;
export const defineProj = (val: Proj) => val;
