export const metaDefaults = {
  title: process.env.NUXT_PUBLIC_META_TITLE || process.env.METATITLE || 'Ovatics \u2013 Vielfalt. Qualit\u00e4t. Vertrauen.',
  description: process.env.NUXT_PUBLIC_META_DESCRIPTION || process.env.METADESC || 'Ovatics Online-Shop f\u00fcr ausgew\u00e4hlte Produkte',
  keywords: process.env.NUXT_PUBLIC_META_KEYWORDS || process.env.METAKEYWORDS || 'Ovatics, Online-Shop, Babynahrung, Champagner, Pflege, Spirits',
  robots: process.env.NUXT_PUBLIC_ROBOTS || 'all',
  themeColor: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#202D89',
};

export const openGraph = {
  title: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'Ovatics \u2013 Vielfalt. Qualit\u00e4t. Vertrauen.',
  image:
    process.env.NUXT_PUBLIC_OG_IMG ||
    process.env.OG_IMG ||
    '/images/ovatics-logo-400.png',
  type: process.env.NUXT_PUBLIC_OG_TYPE || process.env.OG_TYPE || 'website',
};

export const favicon = {
  appleTouchIcon: process.env.NUXT_PUBLIC_FAVICON || process.env.FAVICON || '/_nuxt-plenty/favicon.ico',
};

export const appConfiguration = {
  head: {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
    htmlAttrs: {
      lang: process.env.DEFAULTLANGUAGE ?? 'en',
    },
    meta: [
      { property: 'og:type', content: openGraph.type },
      { property: 'og:image', content: openGraph.image },
      { property: 'og:title', content: openGraph.title },
      { property: 'og:url', content: process.env.API_ENDPOINT },
    ],
  },
};
