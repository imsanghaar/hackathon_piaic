import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Native Software Development',
  tagline: 'Build the future with AI-powered development',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Add trailing slash config for better GitHub Pages compatibility
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://imsanghaar.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hackathon_piaic/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imsanghaar', // Usually your GitHub org/user name.
  projectName: 'hackathon_piaic', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch to deploy to

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
            'https://github.com/imsanghaar/piaic_hackathon_ai/edit/main/',
          // routeBasePath: '/', // Serve docs at the root route - commented out to use default /docs route
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
      title: 'AI Native Software Development',
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
          href: 'https://github.com/panaversity/ai-native-software-development',
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
              to: '/docs/intro', // Link to the intro page in docs
            },
            {
              label: 'Full Curriculum',
              href: 'https://www.panaversity.org/curriculum', // Placeholder
            },
            {
              label: 'Learning Path',
              href: 'https://www.panaversity.org/learning-path', // Placeholder
            },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@panaversity', // Placeholder
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/panaversity/', // Placeholder
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/piaic/', // Placeholder
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Panaversity', // Placeholder
            },
          ],
        },
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/imsanghaar/piaic_hackathon_ai', // Updated to your repo
            },
            {
              label: 'Example Projects',
              href: 'https://github.com/imsanghaar/piaic_hackathon_ai', // Updated to your repo
            },
          ],
        },
        {
          title: 'ABOUT',
          items: [
            {
              label: 'Panaversity',
              href: 'https://www.panaversity.org/', // Original link
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
