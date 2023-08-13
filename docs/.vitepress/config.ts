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
  title: "@mandrasch's DDEV Lab",
  description:
    "This site contains my experimental projects done with the awesome developer environment tool DDEV (Open Source). Authored by Matthias Andrasch.",
  lastUpdated: true,

  // https://vitepress.vuejs.org/config/basics.html#base
  base: basePath,

  themeConfig: {
    editLink: {
      pattern: "https://github.com/mandrasch/my-ddev-lab/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

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

    socialLinks: [
      { icon: "github", link: "https://github.com/mandrasch/my-ddev-lab" },
    ],
  },
});

function getGeneralSidebar() {
  return [
    {
      text: "Introduction",
      items: [
        { text: "Hello!", link: "/" },
        { text: "What is DDEV?", link: "/what-is-ddev" },
        { text: "DDEV + Composer", link: "/ddev-composer" },
        { text: "DDEV pull", link: "/ddev-pull" },
        { text: "DDEV tips & tricks", link: "/ddev-tips-and-tricks" },
      ],
    },
    {
      text: "CMS & frameworks",
      items: [
        { text: "Craft CMS", link: "/tutorials/cms-and-frameworks/craftcms" },
        { text: "Kirby", link: "/tutorials/cms-and-frameworks/kirby" },
        {
          text: "Laravel",
          link: "/tutorials/cms-and-frameworks/laravel",
        },
        { text: "Statamic", link: "/tutorials/cms-and-frameworks/statamic" },
        { text: "Typo3", link: "/tutorials/cms-and-frameworks/typo3" },
        { text: "WordPress", link: "/tutorials/cms-and-frameworks/wordpress" },
      ],
    },
    {
      text: "Cloud development",
      items: [
        { text: "Gitpod", link: "/tutorials/cloud/gitpod" },
        { text: "Codespaces", link: "/tutorials/cloud/codespaces" },
      ],
    },
    {
      text: "NodeJS",
      items: [
        {
          text: "Browsersync / LaravelMix",
          link: "/tutorials/nodejs-tools/laravel-mix-browsersync",
        },
        {
          text: "Vite",
          link: "/tutorials/nodejs-tools/vite",
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
      items: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      items: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}
