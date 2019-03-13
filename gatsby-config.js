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
        accessToken: `8ed59997235f069707b49a4aa2f9401ec8a97afb55da957a1280ec308e3534b5`
      }
    }
  ]
};
