const PROJECTS = [
  {
    id: "1",
    href: "https://app.polkamarkets.com/",
    title: "Polkamarkets App",
    description:
      "Design review and implementation of UI/UX to be integrated with MetaMask interface or other digital wallets services.",
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
    title: "UFAL 60 Anos",
    description:
      "Design and implementation of a virtual exhibition that shows the evolution of the Federal University of Alagoas.",
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
    title: "Ways to create Design Tokens",
    description:
      "Writing of step-by-step on how to create design tokens based on shipped web application and without documentation.",
    icon: {
      name: "medium",
    },
    className: {
      startItem: "bg-gray-500/20",
    },
  },
] as const;

export default PROJECTS;
