import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "My DDEV Lab",
  description:
    "This site contains my experimental projects done with the awesome developer environment tool DDEV (Open Source).",
  lastUpdated: true,

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
        { text: "What is Gitpod?", link: "/what-is-gitpod" },
      ],
    },
    {
      text: "WordPress",
      children: [
        { text: "Quick install", link: "/tutorials/wordpress/quick-install" },
        {
          text: "Pull via BackWPup",
          link: "/tutorials/wordpress/pull-backwpup",
        },
        {
          text: "Pull via BackWPup (GitPod)",
          link: "/tutorials/wordpress/pull-backwpup-gitpod",
        },
        { text: "Pull via SSH", link: "/tutorials/wordpress/pull-ssh" },
        {
          text: "Pull via SSH (GitPod)",
          link: "/tutorials/wordpress/pull-ssh-gitpod",
        },
      ],
    },
    {
      text: "CMS & frameworks",
      children: [
        { text: "Kirby", link: "/tutorials/other-cms/kirby" },
        { text: "Statamic", link: "/tutorials/other-cms/statamic" },
        { text: "Typo3", link: "/tutorials/other-cms/typo3" },
      ],
    },
    {
      text: "NodeJS",
      children: [
        {
          text: "Browsersync, LaravelMix, Vite, etc.",
          link: "/nodejs-tools/laravel-mix-vite-etc.md",
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
