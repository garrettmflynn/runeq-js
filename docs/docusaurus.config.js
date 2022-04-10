// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'runeq',
  tagline: `JavaScript Standard Development Kit (SDK) for Rune Lab's Query API`,
  url: 'https://brainsatplay.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'brainsatplay',
  projectName: 'runeq',

  themes: ['@docusaurus/theme-live-codeblock'],


  // ---------------------- TypeDoc Configuration ----------------------
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        tsconfig: '../tsconfig.json',
        entryPoints: [
          "../src", 
        ],
        // entryPointStrategy: "Expand",
        exclude: [
            "./"
        ],
        readme: "none",

        // Plugin options
        out: 'reference',
        sidebar: {
          categoryLabel: 'Reference',
          position: 1,
          fullNames: false
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/garrettmflynn/runeq-js',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/garrettmflynn/runeq-js',

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

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'runeq',
        logo: {
          alt: 'Brains@Play Logo',
          src: 'img/logo_colorized-min.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'examples',
            position: 'left',
            label: 'Examples',
          },
          { 
            type: 'doc',
            docId: 'reference/index',
            label: "Reference", 
            position: 'left'
          },
          // { href: repoUrl, label: "GitHub", external: true },
          // { blog: true, label: "Blog" },
          // { href: helpUrl, label: "Need Help?", external: true }
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/garrettmflynn/runeq-js',
            // label: 'GitHub',
            position: 'right',
            className: 'github-icon-menu',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs',
              },
              {
                label: 'Examples',
                to: '/examples',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/runeq',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/tQ8P79tw8j',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brainsatplay',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/garrettmflynn/runeq-js',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brains@Play.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
