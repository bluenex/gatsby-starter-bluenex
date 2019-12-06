module.exports = {
  proxy: {
    prefix: '/api',
    url: 'http://localhost:8888',
  },
  siteMetadata: {
    title: 'Gatsby Project',
    description: 'A description for this gatsby project.',
    siteUrl: 'https://bluenex.github.io',
    image: 'https://bluenex.github.io/images/blog_avatar.png',
    logo: 'https://bluenex.github.io',
    type: 'website',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1234567890',
        exclude: ['/*.png', '/*.ico', '/static/**'],
      },
    },
  ],
};
