const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: "OneUp",
    heading: "ABOUT THIS SITE",
  },
  // {
  //   route: "/about",
  //   title: "About | OneUp",
  //   heading: "ABOUT ME",
  // },
  // {
  //   route: "/resources",
  //   title: "Resources | OneUp",
  //   heading: "ARTICLES",
  // },
  // {
  //   route: "/projects",
  //   title: "Projects | OneUp",
  //   heading: "PROJECTS",
  // },
  // {
  //   route: "/meetings",
  //   title: "Meetings | OneUp",
  //   heading: "STATS",
  // },
  {
    route: "/contact",
    title: "Get Involved | OneUp",
    heading: "Get Inolved",
  },
];

export { pages, randomString };
