import classNames from "consts/classNames";
import Project, { type ProjectProps } from "./Project";

const projects: ProjectProps[] = [
  {
    id: "polkamarkets",
    actions: [
      {
        id: "live",
        href: "https://app.polkamarkets.com/",
        endItem: {
          icon: "ArrowOutward",
        },
      },
      {
        id: "contribution",
        href: "https://github.com/Polkamarkets/polkamarkets-web/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
    ],
    startItem: {
      className: "bg-gradient-to-br from-blue-500/10 to-blue-500/20",
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
      className: "bg-gradient-to-br from-sky-500/10 to-sky-500/20",
      icon: "Vitalk",
    },
  },
  {
    id: "bepro",
    actions: [
      {
        id: "live",
        href: "https://app.bepro.network",
        endItem: {
          icon: "ArrowOutward",
        },
      },
      {
        id: "contribution",
        href: "https://github.com/bepronetwork/web-network/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
    ],
    startItem: {
      className: "bg-gradient-to-br from-indigo-500/10 to-indigo-500/20",
      icon: "BeproNetwork",
    },
  },
  {
    id: "ufal",
    actions: [
      {
        id: "live",
        href: "https://sites.ufal.br/ufal-60-anos/",
        endItem: {
          icon: "ArrowOutward",
        },
      },
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
      className: "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/20",
      icon: "Ufal",
    },
  },
];

export default function ContributionsProjects() {
  return projects.map((project) => (
    <li key={project.id} className={classNames.grid.col[4][1]}>
      <Project {...project} />
    </li>
  ));
}
