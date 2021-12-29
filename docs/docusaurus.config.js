/**
 * Copyright (c) NKDuy
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line import/no-extraneous-dependencies
const lightTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line import/no-extraneous-dependencies
const darkTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NKDuy Docs',
  tagline: 'Docs for all project of NKDuy',
  url: 'https://khanhduy1407.github.io/nkdcv-python',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'khanhduy1407', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
          'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themes: ['live-codeblock'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/khanhduy1407/nkdcv-python/edit/main/docs/',
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
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightTheme,
        darkTheme,
        additionalLanguages: ['java'],
      },
      navbar: {
        hideOnScroll: true,
        title: 'NKDuy',
        logo: {
          alt: 'NKDuy Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://github.com/khanhduy1407/nkdcv-python/issues', label: 'Issues', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/khanhduy1407/nkdcv-python',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'Intro',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'The NKDuy Forum',
                href: 'https://forum.nkduy-user.tk/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/khanhduy1407'
              },
              {
                label: 'Github',
                href: 'https://github.com/khanhduy1407'
              }
            ]
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'License',
                href: '/license',
              },
            ],
          },
        ],
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} NKDuy. All Rights Reserved.`,
      },
    }),
};

module.exports = config;
