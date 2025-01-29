import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Portfolio Logan Salé",
  DESCRIPTION: "Bienvenue sur le portfolio de Logan  Salé.",
  AUTHOR: "Mark Horn",
};

// Work Page
export const WORK: Page = {
  TITLE: "Stages",
  DESCRIPTION: "Stages que j'ai éffectués.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Fiches procédure",
  DESCRIPTION: "Quelques fiches procédure que j'ai pu réaliser",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Projets récent sur lesquel j'ai travaillé.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Recherche les projets et posts avec un mot clé.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Accueil",
    HREF: "/",
  },
  {
    TEXT: "Stages",
    HREF: "/stages",
  },
  {
    TEXT: "Fiches procédure",
    HREF: "/blog",
  },
  {
    TEXT: "Projets",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "sale.logan99@gmail.com",
    HREF: "mailto:sale.logan99@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Shaizoo",
    HREF: "https://github.com/Shaizoo",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Logan Salé",
    HREF: "https://www.linkedin.com/in/logan-salé/",
  },
  {
    NAME: "Instagram",
    ICON: "Instagram",
    TEXT: "Logan Salé",
    HREF: "https://instagram.com/logansale_",
  },
];
