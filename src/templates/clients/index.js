import * as React from 'react';
import {graphql} from "gatsby";

const ClientsPageTemplate = ({data}) => {
    console.log(data)
    return (
        <h1>Hello</h1>
    )
}

export default ClientsPageTemplate;

export const CLIENTS_TEMPLATE_QUERY = graphql`
    query ClientsTemplateQuery($id: String!) {
      wpClient(id: {eq: $id}) {
        clientsPost {
          clientDescription
          clientName
          imageBreaker {
            ... on WpClientImage {
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          imageSlider {
            ... on WpClientImage {
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          mainImage {
            sourceUrl
          }
          strategyCopy
        }
        id
      }
    }
`