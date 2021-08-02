module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "hello world",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
