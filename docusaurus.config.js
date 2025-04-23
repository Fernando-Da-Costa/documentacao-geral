// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentação Geral",
  tagline: "",
  favicon: "img/favicon.ico",

  url: "https://fernando-da-costa.github.io",
  baseUrl: "/documentacao-geral/",

  organizationName: "fernando-da-costa", 
  projectName: "documentacao-geral",
  deploymentBranch: "gh-pages", // Certifique-se de que está implantando na branch correta

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"], // Português e Inglês
  },

  customFields: {
    description: "Documentação Geral da Integração. Aprenda, explore e evolua com nossos guias e tutoriais.",
    keywords: "documentação, integração, tutoriais, blog, engenharia de dados, sistemas",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/fernando-da-costa/documentacao-geral/edit/main/",
        },
        blog: {
          showReadingTime: true, 
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/fernando-da-costa/documentacao-geral/edit/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentação",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "All",
          },
          {
            type: "localeDropdown",  
            position: "right",        
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Integração, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["java", "python"],
      },
    }),

  stylesheets: [
    { href: "/documentacao-geral/css/custom.css", type: "text/css" },
  ],
};

export default config;
