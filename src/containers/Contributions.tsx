import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import Project, { type ProjectProps } from "./Project";

export default function Contributions() {
  const [t] = useTranslation();

  return (
    <Tab.Panel>
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
    </Tab.Panel>
  );
}

const projects: ProjectProps[] = [
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
        "bg-gradient-to-br from-blue-500/10 to-blue-500/20 border-t border-t-blue-500/10",
      icon: "Polkamarkets",
    },
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
        "bg-gradient-to-br from-sky-500/10 to-sky-500/20 border-t border-t-sky-500/10",
      icon: "Vitalk",
    },
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
        "bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 border-t border-t-indigo-500/10",
      icon: "BeproNetwork",
    },
    endItem: {
      href: "https://app.bepro.network",
    },
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
        href: "https://www.behance.net/gallery/116828869/UFAL-60-Anos",
        startItem: {
          icon: "Behance",
        },
      },
    ],
    startItem: {
      className:
        "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/20 border-t border-t-fuchsia-500/10",
      icon: "Ufal",
    },
    endItem: {
      href: "https://sites.ufal.br/ufal-60-anos/",
    },
  },
];
