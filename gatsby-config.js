module.exports = {
  siteMetadata: {
    title: "Pratik Var | Front-End Developer",
    description: `Hi, I'm Pratik Var, a front-end developer. I design and build websites with simple, beautiful and responsive UIs. This is my personal website and portfolio.`,
    siteUrl: `https://pratvar.com`,
    social: {
      instagram: `pratvar.jpg`,
      facebook: `pratvar.dev`,
      twitter: `pratvar`
    }
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: __dirname + "/src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
};
