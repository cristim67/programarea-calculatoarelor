import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

dotenv.config();

const config: Config = {
  title: 'PCLP Lab',
  tagline: 'Programarea Calculatoarelor și Limbaje de Programare',
  favicon: 'img/favicon.ico',

  url: 'https://pclp.cristimiloiu.com/',
  baseUrl: '/',

  organizationName: 'Cristi Miloiu',
  plugins: [
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            to: '/docs/', // Noua destinație
            from: '/white-visible-damselfly/docs/',
          },
        ],
      },
    ],
  ],
  projectName: 'pclp-lab',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    algolia:{
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'YOUR_INDEX',
      contextualSearch: true,
      appId: process.env.ALGOLIA_APP_ID,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    navbar: {
      title: 'PCLP Lab',
      items: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: ['@docusaurus/theme-live-codeblock', "@docusaurus/theme-mermaid"],
};

export default config;
