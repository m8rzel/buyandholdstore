require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { 
        apiToken: '049931c49ba3e6451111d3fdfaa500' 
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'YjgwODhkMzEtOWU2YS00ZjdlLThkNTEtZDNhNjZmMDIwMjVlNjM3NTQ2MTQyNjkzNjQwNzI1',
        autopop: false
      }
    },
  ],
}
