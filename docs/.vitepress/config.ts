import { defineConfig } from "vitepress";
// for sitemap generation
import { createContentLoader } from "vitepress";
import { SitemapStream } from "sitemap";
import { createWriteStream } from "node:fs";
import { resolve } from "node:path";

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
      // "/config/": getConfigSidebar(), // subpage
      "/": getGeneralSidebar(),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/mandrasch/my-ddev-lab" },
    ],
  },

  // sitemap generation
  // (https://dev.to/paullaros/generating-a-dynamic-sitemap-with-vitepress-ldd)
  buildEnd: async ({ outDir }) => {
    // TODO: Use config / env var?
    const sitemap = new SitemapStream({
      hostname: "https://my-ddev-lab.mandrasch.eu/",
    });
    const pages = await createContentLoader(["**/*.md"]).load();
    const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
    console.log({ pages });
    sitemap.pipe(writeStream);
    pages.forEach((page) =>
      sitemap.write(
        page.url
          // Strip `index.html` from URL
          .replace(/index.html$/g, "")
          // Optional: if Markdown files are located in a subfolder
          .replace(/^\/docs/, "")
      )
    );
    sitemap.end();

    await new Promise((r) => writeStream.on("finish", r));
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
      text: "Docker runtimes",
      items: [
        {
          text: "Colima",
          link: "tutorials/docker-runtimes/colima.md",
        },
        {
          text: "Orbstack",
          link: "tutorials/docker-runtimes/orbstack.md",
        },
      ],
    },
    {
      text: "NodeJS",
      items: [
        {
          text: "Vite",
          link: "/tutorials/nodejs-tools/vite",
        },
        {
          text: "Other buildtools",
          link: "/tutorials/nodejs-tools/laravel-mix-browsersync",
        },
      ],
    },
    {
      text: "CMS & frameworks",
      items: [
        {
          text: "Craft CMS",
          link: "/tutorials/cms-and-frameworks/craftcms",
        },
        {
          text: "Kirby",
          link: "/tutorials/cms-and-frameworks/kirby",
        },
        {
          text: "Laravel",
          link: "/tutorials/cms-and-frameworks/laravel",
        },
        {
          text: "Statamic",
          link: "/tutorials/cms-and-frameworks/statamic",
        },
        {
          text: "Typo3",
          link: "/tutorials/cms-and-frameworks/typo3",
        },
        {
          text: "WordPress",
          link: "/tutorials/cms-and-frameworks/wordpress",
        },
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
      text: "Contributing to DDEV",
      items: [
        {
          text: "Contributing to DDEV",
          link: "/tutorials/contributing/general",
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
