import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Rise Of Physical AI and Humanoid Robotics',
  tagline: 'AI Systems in the Physical World. Embodied Intelligence.',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://imsanghaar.github.io', // Vercel deployment URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/', // Root path for Vercel deployment

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imsanghaar', // Usually your GitHub org/user name.
  projectName: 'my-book', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'The Rise of Physical AI and Humanoid Robotics',
      logo: {
        alt: 'AI Native Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/imsanghaar',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'Start Your Journey',
              to: '/docs/introduction/', // Assuming this links to the book intro
            },
            {
              label: 'My Work',
              href: 'https://sanghaar.vercel.app/', // Author's portfolio
            },
            {
              label: 'WhatsApp',
              href: 'https://wa.me/923441323835', // Author's WhatsApp
            },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/imam-sanghaar-chandio-96780b274/', // Author's LinkedIn
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/imsanghaar/', // Author's Instagram
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/profile.php?id=61556981875577', // Author's Facebook
            },
          ],
        },
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'GitHub Profile',
              href: 'https://github.com/imsanghaar', // Updated to author's profile
            },
            {
              label: 'Projects',
              href: 'https://github.com/imsanghaar?tab=repositories', // Updated to author's repositories
            },
          ],
        },
        {
          title: 'ABOUT',
          items: [
            {
              label: 'About Author',
              href: 'https://sanghaar.vercel.app/', // Author's portfolio
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sanghaar • AI Native Software Development • Free & Open Source`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
