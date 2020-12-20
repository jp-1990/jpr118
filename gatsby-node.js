/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const slugify = require("slugify")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            content {
              raw
            }
            date
            title
          }
        }
      }
    }
  `)
  data.allContentfulArticle.edges.forEach(edge => {
    const slug = slugify(edge.node.title)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/newsArticle.js`),
      context: { slug: slug, title: edge.node.title },
    })
  })
}
