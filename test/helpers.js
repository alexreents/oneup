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
  {
    route: "/about",
    title: "About | OneUp",
    heading: "ABOUT ME",
  },
  {
    route: "/articles",
    title: "Articles | OneUp",
    heading: "ARTICLES",
  },
  {
    route: "/research",
    title: "Research | OneUp",
    heading: "RESEARCH",
  },
  {
    route: "/stats",
    title: "Stats | OneUp",
    heading: "STATS",
  },
  {
    route: "/contact",
    title: "Contact | OneUp",
    heading: "CONTACT",
  },
];

export { pages, randomString };
