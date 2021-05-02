/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = async function({actions, graphql}) {
//     const pluginOptions = {
//         wordPressUrl: `http://34.222.54.131/`,
//         uploadsUrl: `http://34.222.54.131/wp-content/uploads/`,
//     };
//     const {
//         data: {
//             wpcontent: {
//                 pages: {
//                     pageNodes
//                 },
//                 posts: {
//                     postNodes
//                 }
//             }
//         }
//     } = await graphql(
//         `query {
//           wpcontent {
//             pages(first: 20) {
//               pageNodes: nodes {
//                 id
//                 uri
//                 template {
//                     __typename
//                   }
//               }
//             }
//             posts {
//               postNodes: nodes {
//                 id
//                 uri
//               }
//             }
//           }
//         }`
//     )
// }