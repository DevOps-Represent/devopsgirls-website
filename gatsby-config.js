module.exports = {
    siteMetadata: {
        title: `devOpsGirls`,
      },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}