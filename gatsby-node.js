/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

//create pages dynamically 
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions 
    const result = await graphql(`
    query GetProducts {
        products: allContentfulGatsbyExample(filter: {node_locale: {eq: "en-US"}}) {
          nodes {
            slug
          }
        }
      }      
    `)
    result.data.products.nodes.forEach((product) => {
        createPage({
            path: `/page-2/${product.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug: product.slug
            }
        })
    })
}