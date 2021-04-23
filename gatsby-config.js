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
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.29",
        publicApiKey: 'YjgwODhkMzEtOWU2YS00ZjdlLThkNTEtZDNhNjZmMDIwMjVlNjM3NTQ2MTQyNjkzNjQwNzI1', // use public api key here or in environment variable
        defaultLang: "de",
        currency: "eur",
        openCartOnAdd: false,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          de: {
            actions: {
              checkout: "Zur Kasse",
            },
          },
        },
        templatesUrl:
          "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
            <billing section="bottom">
              <fieldset class="snipcart-form__set">
                  <div class="snipcart-form__field">
                      <div class="snipcart-form__field-checkbox">
                          <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
                          <snipcart-label for="subscribeToNewsletter" class="snipcart__font--tiny snipcart-form__label--checkbox">
                              Subscribe to newsletter
                          </snipcart-label>
                      </div>
                  </div>
              </fieldset>
            </billing>
            `,
      },
    },
  ],
}
