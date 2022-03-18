/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const {
        data: {
            allWpClient: {
                clientNodes
            }
        }
    } = await graphql(`
        query {
            allWpClient {
                clientNodes: nodes {
                    uri
                    id
                }
            }
        }
    `)
    clientNodes.forEach(node => {
        actions.createPage({
            path: node.uri,
            component: require.resolve(`./src/templates/clients/index.js`),
            context: node
        })
    })
}
