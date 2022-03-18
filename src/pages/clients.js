import * as React from 'react';
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Contact from "../components/sections/contact/contact";
import {useStaticQuery} from "gatsby";
import {graphql} from "gatsby";
import ClientGrid from "../components/client-grid/clientGrid";

const ClientsPage = () => {
    const {allWpClient: {clientNodes}} = useStaticQuery(graphql`
    {
      allWpClient {
        clientNodes: nodes {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          uri
          id
        }
      }
    }
  `)
    return (
        <Layout>
            <Hero hasText={true} pageTitle={'Our Work'} />
            <ClientGrid clientGrid={clientNodes} />
            <Contact />
        </Layout>
    )
}

export default ClientsPage;
