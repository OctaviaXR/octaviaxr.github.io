/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://github.us17.list-manage.com/subscribe/post?u=7b08e15e5a660a7041f6f0f6f&amp;id=822e3eff4c'
      }
    },
  ],
}