require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Nunito',
            variants: ['400']
          },
          {
            family: 'Open Sans'
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q5m4ayfot88b`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
