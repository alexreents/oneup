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
    title: "ESA",
    heading: "ABOUT THIS SITE",
  },
  {
    route: "/about",
    title: "About | ESA",
    heading: "ABOUT ME",
  },
  {
    route: "/articles",
    title: "Articles | ESA",
    heading: "ARTICLES",
  },
  {
    route: "/research",
    title: "Research | ESA",
    heading: "RESEARCH",
  },
  {
    route: "/stats",
    title: "Stats | ESA",
    heading: "STATS",
  },
  {
    route: "/contact",
    title: "Contact | ESA",
    heading: "CONTACT",
  },
];

export { pages, randomString };
