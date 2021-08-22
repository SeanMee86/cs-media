/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async function({actions, graphql}) {
    const {
        data: {
            allWpPage: {
                edges
            }
        }
    } = await graphql(`
        query {
          allWpPage {
            edges {
              node {
                title
                uri
                id
              }
            }
          }
        }
    `)
    edges.forEach(edge => {
        switch (edge.node.title) {
            case 'Home':
                actions.createPage({
                    path: edge.node.uri,
                    component: path.resolve(`src/templates/home/index.js`),
                    context: {
                        id: edge.node.id
                    }
                })
                break;
            case 'Services':
                actions.createPage({
                    path: edge.node.uri,
                    component: path.resolve(`src/templates/services/index.js`),
                    context: {
                        id: edge.node.id
                    }
                })
                break;
        }
    })
}
