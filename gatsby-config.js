module.exports = {
  siteMetadata: {
    title: 'Alferex Industries Private Limited',
    author: 'Ravi Ojha',
    description: 'We are an industrial technology company that manufactures heavy-duty military grade machinery equipments of unmatched precision and accuracy.',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        typeName: `Json`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-plugin-import',
            options: {
              libraryName: "antd",
              style: true,   // or 'css'
            }
          },
          {
            resolve: `gatsby-plugin-less`,
            options: {
              modifyVars: {
                'body-background': '#fff',
              },
              javascriptEnabled: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-122360620-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alferex Industries Private Limited`,
        short_name: `Alferex Industries`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#517384`,
        display: `minimal-ui`,
        icon: `src/assets/alferex_icon_colored_on_transparent_bg.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
