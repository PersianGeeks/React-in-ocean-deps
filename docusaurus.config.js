// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'میتی',
  tagline: '',
  favicon: 'img/logo.png',


  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({docPath})=>{
           return `https://github.com/mahdi-momeni/documents/tree/master/${docPath}`
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'میتی',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'آموزش‌ها',
            position: 'left',
            items: [
              {
                label: 'Nodejs',
                to: 'docs/Node/intro',
                activeBaseRegex: 'docs/Node/',
              },
              {
                label: 'React',
                to: 'docs/React/intro',
                activeBaseRegex: 'docs/React/',
              },
              {
                label: 'Typescript',
                to: 'docs/Typescript/intro',
                activeBaseRegex: 'docs/Typescript/',
              },
              {
                label: 'Next',
                to: 'docs/Next/intro',
                activeBaseRegex: 'docs/Next/',
              },
              {
                label: 'Concepts',
                to: 'docs/Concepts/intro',
                activeBaseRegex: 'docs/Concepts/',
              },
            ],
          },
          {to: '/blog', label: 'بلاگ', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `ساخته شده با قلب زیاد :)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },

    }),
};

module.exports = config;