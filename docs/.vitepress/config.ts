import { defineConfig } from "vitepress";

let basePath = "/";
if (process.env.BASE_PATH) {
  console.log(
    "Received BASE_PATH from node process.env",
    process.env.BASE_PATH
  );
  basePath = process.env.BASE_PATH;
}

export default defineConfig({
  lang: "en-US",
  title: "My DDEV Lab",
  description:
    "This site contains my experimental projects done with the awesome developer environment tool DDEV (Open Source).",
  lastUpdated: true,

  // https://vitepress.vuejs.org/config/basics.html#base
  base: basePath,

  themeConfig: {
    repo: "mandrasch/my-ddev-lab",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      { text: "Tutorials", link: "/", activeMatch: "^/$|^/tutorials/" },
      // subpage with own sidebar:
      /*{
        text: "Config Reference",
        link: "/config/basics",
        activeMatch: "^/config/",
      },*/
      {
        text: "Imprint/Privacy",
        link: "/imprint-privacy",
        activeMatch: "^/imprint-privacy/",
      },
      /*{
        text: "Release Notes",
        link: "https://github.com/vuejs/vitepress/releases",
      },*/
    ],

    sidebar: {
      "/tutorials/": getGeneralSidebar(),
      "/config/": getConfigSidebar(), // subpage
      "/": getGeneralSidebar(),
    },
  },
});

function getGeneralSidebar() {
  return [
    {
      text: "Introduction",
      children: [
        { text: "What is DDEV?", link: "/" },
        { text: "DDEV + composer", link: "/ddev-composer" },
        { text: "DDEV + Gitpod", link: "/ddev-meets-gitpod" },
      ],
    },
    {
      text: "CMS & frameworks",
      children: [
        { text: "WordPress", link: "/tutorials/cms-and-frameworks/wordpress" },
        { text: "Kirby", link: "/tutorials/cms-and-frameworks/kirby" },
        { text: "Statamic", link: "/tutorials/cms-and-frameworks/statamic" },
        {
          text: "Inertia (Laravel)",
          link: "/tutorials/cms-and-frameworks/inertia",
        },
        { text: "Typo3", link: "/tutorials/cms-and-frameworks/typo3" },
      ],
    },
    {
      text: "NodeJS",
      children: [
        {
          text: "Browsersync, LaravelMix, Vite, etc.",
          link: "/tutorials/nodejs-tools/laravel-mix-vite-etc",
        },
      ],
    },
  ];
}
// menu for subpage config
function getConfigSidebar() {
  return [
    {
      text: "App Config",
      children: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      children: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}
