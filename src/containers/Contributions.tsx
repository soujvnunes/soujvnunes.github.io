import { useTranslation } from "react-i18next";
import Project, { type ProjectProps } from "./Project";

export default function Contributions() {
  const [t] = useTranslation();

  return (
    <section>
      <ul
        role="feed"
        aria-busy="false"
        aria-label={t("tabs.contributions")}
        className="space-y-2 lg:space-y-4"
      >
        {projects.map((project) => (
          <li key={project.id}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const projects: ProjectProps[] = [
  {
    id: "tailwind_expand",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/soujvnunes/tailwind-expand/commits/main/?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
      {
        id: "package",
        href: "https://www.npmjs.com/org/tailwind-expand",
        startItem: {
          icon: "NPM",
        },
      },
    ],
    startItem: {
      className:
        "bg-gradient-to-br from-blue-600/10 to-blue-600/20 border-blue-600/10 border-b dark:border-b-0 dark:border-t",
      icon: "TailwindExpand",
    },
    technologies: [
      "typescript",
      "node.js",
      "tailwind css",
      "vite",
      "postcss",
      "babel",
      "swc",
      "jest",
      "tsup",
    ],
  },
  {
    id: "themizer",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/soujvnunes/themizer/commits/main/?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
      {
        id: "package",
        href: "https://www.npmjs.com/package/themizer",
        startItem: {
          icon: "NPM",
        },
      },
    ],
    startItem: {
      className:
        "bg-gradient-to-br from-amber-500/10 to-amber-500/20 border-amber-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "Themizer",
    },
    technologies: [
      "typescript",
      "node.js",
      "commander.js",
      "design tokens",
      "css custom properties",
      "oklch color space",
      "jest",
      "tsup",
      "pnpm",
    ],
  },
  {
    id: "palpitada",
    actions: [],
    endItem: {
      href: "https://palpitada.com.br/",
    },
    startItem: {
      className:
        "bg-gradient-to-br from-emerald-500/10 to-emerald-900/20 border-emerald-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "Palpitada",
    },
    technologies: [
      "typescript",
      "next.js",
      "tailwind css",
      "figma",
      "react",
      "redux toolkit",
      "rtk query",
      "rest api",
      "graphql",
      "smart contracts",
      "ethers.js",
      "scrum",
    ],
  },
  {
    id: "polkamarkets",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/Polkamarkets/polkamarkets-web/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
    ],
    endItem: {
      href: "https://app.polkamarkets.com/",
    },
    startItem: {
      className:
        "bg-gradient-to-br from-blue-500/10 to-blue-500/20 border-blue-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "Polkamarkets",
    },
    technologies: ["typescript", "figma", "react", "next.js", "scss"],
  },
  {
    id: "vitalk",
    actions: [
      {
        id: "article",
        href: "https://medium.com/@soujvnunes/uma-das-possíveis-maneiras-de-criar-design-tokens-d52a8c315b2",
        startItem: {
          icon: "Medium",
        },
      },
    ],
    startItem: {
      className:
        "bg-gradient-to-br from-sky-500/10 to-sky-500/20 border-sky-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "Vitalk",
    },
    technologies: [
      "figma",
      "react",
      "ruby on rails",
      "bootstrap",
      "react native",
    ],
  },
  {
    id: "bepro",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/bepronetwork/web-network/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
    ],
    startItem: {
      className:
        "bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 border-indigo-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "BeproNetwork",
    },
    endItem: {
      href: "https://app.bepro.network",
    },
    technologies: ["typescript", "figma", "web3", "rest api", "scss"],
  },
  {
    id: "ufal",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/soujvnunes/virtual-exhibition/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
      {
        id: "project",
        href: "https://www.behance.net/gallery/140840807/WIP-UFAL-60-Anos-%28Redesign%29",
        startItem: {
          icon: "Behance",
        },
      },
    ],
    startItem: {
      className:
        "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/20 border-fuchsia-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "Ufal",
    },
    endItem: {
      href: "https://sites.ufal.br/ufal-60-anos/",
    },
    technologies: ["mui", "adobe xd", "adobe illustrator", "react"],
  },
];
