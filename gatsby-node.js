/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const {copyLibFiles} = require('@builder.io/partytown')

exports.onPreBootstrap = async () => {
    const destPath = "./public/~partytown"

    console.log(`copying partytown to base path ${destPath}`)
    await copyLibFiles(destPath);
}

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const {
        data: {
            allWpPage: {
                nodes
            }
        }
    } = await graphql(`
        query {
            allWpPage {
                nodes {
                    __typename
                    title
                    uri
                    id
                    databaseId
                }
            }
        }
    `)
    nodes.forEach(node => {
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
}
