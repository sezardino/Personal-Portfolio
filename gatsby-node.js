const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results = await graphql(`
    {
      allMdx(filter: { frontmatter: { type: { eq: "page" } } }) {
        nodes {
          frontmatter {
            slug
            template
          }
        }
      }
    }
  `);

  const pages = results.data.allMdx.nodes;
  pages.forEach(item => {
    createPage({
      path: item.frontmatter.slug === 'home' ? '/' : item.frontmatter.slug,
      component: path.resolve(`./src/templates/${item.frontmatter.template}.tsx`),
      context: {
        slug: item.frontmatter.slug,
      },
    });
  });
};
