/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-react-helmet`],
  plugins: [`gatsby-plugin-fontawesome-css`],
  plugins: [`gatsby-plugin-netlify`],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora`,
          `Dosis\:200,400`
        ],
        display: 'swap'
      }
    }
  ],
}
