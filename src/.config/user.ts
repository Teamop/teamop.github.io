import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: 'Terry\'s Blog',
    subtitle: '',
    author: 'Terry',
    description: 'Some random notes',
    website: 'https://teamop.github.io',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/Teamop/teamop.github.io',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    categoryMap: [],
  },
  appearance: {
    locale: 'en-us',
  },
  seo: { twitter: '' },
}
