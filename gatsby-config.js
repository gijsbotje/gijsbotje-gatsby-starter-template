module.exports = {
  siteMetadata: {
    title: 'gatsby starter gijsbotje',
    description: 'gatsby starter gijsbotje',
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts/`,
        name: `posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=2]': 'h4 mb-24 mt-56',
                paragraph: 'mb-24',
              },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        // googleAnalytics: {
        //   trackingId: 'code',
        // },
        // googleTagManager: {
        //   trackingId: 'code',
        // },
        // facebookPixel: {
        //   pixelId: 'code',
        // },
        environments: ['production'],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'gatsby starter gijsbotje',
    //     short_name: 'gatsby starter gijsbotje',
    //     description: 'gatsby starter gijsbotje',
    //     start_url: '/',
    //     background_color: '#fff',
    //     theme_color: '#005eff',
    //     display: 'standalone',
    //     cache_busting_mode: 'none',
    //     // icons: [
    //     //   {
    //     //     src: '/img/favicon-16x16.png',
    //     //     sizes: '16x16',
    //     //     type: 'image/png',
    //     //   },
    //     //   {
    //     //     src: '/img/favicon-32x32.png',
    //     //     sizes: '32x32',
    //     //     type: 'image/png',
    //     //   },
    //     //   {
    //     //     src: '/img/mstile-150x150.png',
    //     //     sizes: '150x150',
    //     //     type: 'image/png',
    //     //   },
    //     //   {
    //     //     src: '/img/android-chrome-192x192.png',
    //     //     sizes: '192x192',
    //     //     type: 'image/png',
    //     //     purpose: 'maskable',
    //     //   },
    //     //   {
    //     //     src: '/img/android-chrome-512x512.png',
    //     //     sizes: '512x512',
    //     //     type: 'image/png',
    //     //   },
    //     // ],
    //   },
    // },
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-stylelint',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    '@bumped-inc/gatsby-plugin-optional-chaining',
    'gatsby-plugin-netlify',
  ],
};
