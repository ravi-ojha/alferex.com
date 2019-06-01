const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productPost = path.resolve('./src/templates/product-post.js')
    const categoryPage = path.resolve('./src/templates/category-products.js')

    resolve(
      graphql(
        `
          {
            allProductsJson {
              edges {
                node {
                  internal {
                    type
                  }
                  fields {
                    slug
                  }
                  id
                  title
                  description
                  material
                  type
                  category
                  categorySlug
                  images
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create a page that lists all products.
        createPage({
          path: `/products`,
          component: require.resolve("./src/templates/all-products.js"),
          context: {
            allProducts: result.data.allProductsJson.edges
          }
        })

        let categorySlugs = result.data.allProductsJson.edges.map((edge) => (edge.node.categorySlug));
        categorySlugs = [...new Set(categorySlugs)];

        console.log(categorySlugs);
        _.each(categorySlugs, (categorySlug, index) => {

          createPage({
            path: `/products/${categorySlug}`,
            component: categoryPage,
            context: {
              allProducts: result.data.allProductsJson.edges,
              categorySlug: categorySlug,
            },
          })
        })

        // Create blog posts pages.
        const posts = result.data.allProductsJson.edges

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: productPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `ProductsJson`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: node.slug,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-flickity-component/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}