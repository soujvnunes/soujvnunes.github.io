const PROJECTS = [
  {
    id: "1",
    href: "https://app.polkamarkets.com/",
    title: "contributions_projects.0.title",
    description: "contributions_projects.0.description",
    icon: {
      name: "polkamarkets",
    },
    className: {
      startItem: "bg-blue-500/20",
    },
  },
  {
    id: "2",
    href: "https://sites.ufal.br/ufal-60-anos/",
    title: "contributions_projects.1.title",
    description: "contributions_projects.1.description",
    icon: {
      name: "ufal60anos",
    },
    className: {
      startItem: "bg-fuchsia-500/20",
    },
  },
  {
    id: "3",
    href: "https://medium.com/@soujvnunes/uma-das-possíveis-maneiras-de-criar-design-tokens-d52a8c315b2",
    title: "contributions_projects.2.title",
    description: "contributions_projects.2.description",
    icon: {
      name: "medium",
    },
    className: {
      startItem: "bg-gray-500/20",
    },
  },
] as const;

export default PROJECTS;
