import * as React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero/hero";
import Contact from "../../components/sections/contact/contact";

const ClientsPageTemplate = ({data: {wpClient: {clientsPost}}}) => {
    console.log(clientsPost)
    return (
        <Layout>
            <Hero hasText={true} pageTitle={'Our Work'} />
            <Contact/>
        </Layout>
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
      }
    }
`
