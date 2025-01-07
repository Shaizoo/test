import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Portfolio Logan Salé",
  DESCRIPTION: "Bienvenue sur le portfolio de Logan  Salé.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Stages",
  DESCRIPTION: "Stages que j'ai éffectués.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Projets récent sur  lequel j'ai travaillé.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Recherche les projets et posts avec un mot clé.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Acceuil", 
    HREF: "/", 
  },
  { 
    TEXT: "Stages", 
    HREF: "/Stages", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projets", 
    HREF: "/projets", 
  },
]

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
    HREF: "https://github.com/Shaizoo"
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
    TEXT: "logan Salé",
    HREF: "https://instagram.com/logansale_",
  },
]

