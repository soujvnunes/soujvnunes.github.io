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
    id: "ainotator",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/soujvnunes/ainotator-web/commits/main/?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
    ],
    endItem: {
      href: "https://ainotator-web.vercel.app/",
    },
    startItem: {
      className:
        "bg-gradient-to-br from-neutral-500/10 to-neutral-500/20 border-neutral-500/10 border-b dark:border-b-0 dark:border-t",
      icon: "AINotator",
    },
    technologies: [
      "typescript",
      "figma",
      "react",
      "redux",
      "rest api",
      "tailwind css",
      "fabric.js",
    ],
  },
  {
    id: "mentalyc",
    actions: [
      {
        id: "contribution",
        href: "https://github.com/soujvnunes/mentalyc-app/commits/main?author=soujvnunes/",
        startItem: {
          icon: "GitHub",
        },
      },
      {
        id: "stories",
        href: "https://6777e1e865133e08a2c2f3a4-afmgojqwxj.chromatic.com",
        startItem: {
          icon: "Storybook",
        },
      },
    ],
    endItem: {
      href: "https://mentalyc-app.vercel.app/",
    },
    startItem: {
      className:
        "bg-gradient-to-br from-fuchsia-800/10 to-fuchsia-800/20 border-fuchsia-800/10 border-b dark:border-b-0 dark:border-t",
      icon: "Mentalyc",
    },
    technologies: ["typescript", "figma", "react", "storybook", "tailwind css"],
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
