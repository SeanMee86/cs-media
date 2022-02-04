import * as React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero/hero";
import Contact from "../../components/sections/contact/contact";
import * as styles from "./clients.module.scss"

const ClientsPageTemplate = ({data: {wpClient: {clientsPost}}}) => {
    console.log(clientsPost)
    return (
        <Layout>
            <Hero hasText={true} pageTitle={'Our Work'} />
            <div>
                <div className={`${styles.section} ${styles.flexSection}`}>
                    <img style={{maxWidth: '350px'}} src={clientsPost.mainImage.sourceUrl} alt={clientsPost.mainImage.altText}/>
                    <div>
                        <h2>{clientsPost.clientName}</h2>
                        <p>{clientsPost.clientDescription}</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageBreak}>
                {clientsPost.imageBreaker.map(image => <div style={{backgroundImage: `url(${image.featuredImage.node.sourceUrl})`}}/>)}
            </div>
            <div>
                <div className={`${styles.section} ${styles.strategySection}`}>
                    <h2>Strategy</h2>
                    <p>{clientsPost.strategyCopy}</p>
                </div>
            </div>
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
