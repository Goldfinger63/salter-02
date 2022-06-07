module.exports = {
  
  siteMetadata: {
    siteUrl: `https://myportfoliomain68624.gtsb.io/`,
    title: "Jeff C. Salter",
    description: "Cybersecurity and Information Design",
    author: "Jeff Salter"
  },
  plugins: [
    
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem/`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `julius sans one`,
          `montserrat\:300,400,400i,700`, // you can also specify font weights and styles
          `architects daughter`,
        ],
        display: 'swap'
      },
    },
   
  ]
   
}
