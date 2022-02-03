/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const {
        data: {
            allWpPage: {
                pageNodes
            },
            allWpClient: {
                clientNodes
            }
        }
    } = await graphql(`
        query {
            allWpPage {
                pageNodes: nodes {
                    __typename
                    title
                    uri
                    id
                    databaseId
                }
            }
            allWpClient {
                clientNodes: nodes {
                    uri
                    id
                }
            }
        }
    `)
    pageNodes.forEach(node => {
        switch (node.title) {
            case 'Home':
                actions.createPage({
                    path: node.uri,
                    component: require.resolve(`./src/templates/home/index.js`),
                    context: node
                })
                break;
            case 'Services':
                actions.createPage({
                    path: node.uri,
                    component: require.resolve(`./src/templates/services/index.js`),
                    context: node
                })
                break;
        }
    })
    clientNodes.forEach(node => {
        actions.createPage({
            path: node.uri,
            component: require.resolve(`./src/templates/clients/index.js`),
            context: node
        })
    })
}
