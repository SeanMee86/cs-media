import * as React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero/hero";
import Contact from "../../components/sections/contact/contact";
import * as styles from "./clients.module.scss"
import Seo from "gatsby-plugin-wpgraphql-seo";

const ClientsPageTemplate = ({data: {wpClient}}) => {
    const {clientsPost} = wpClient;
    return (
        <Layout>
            <Seo post={wpClient} />
            <Hero hasText={true} pageTitle={'Our Work'} />
            <div style={{backgroundColor: '#f2efe8'}}>
                <div className={`${styles.section} ${styles.flexSection}`}>
                    <img style={{maxWidth: '350px'}} src={clientsPost.mainImage.sourceUrl} alt={clientsPost.mainImage.altText}/>
                    <div>
                        <h2>{clientsPost.clientName}</h2>
                        <p>{clientsPost.clientDescription}</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageBreak}>
                {clientsPost.imageBreaker.map(image => <div key={image.featuredImage.node.id} style={{backgroundImage: `url(${image.featuredImage.node.sourceUrl})`}}/>)}
            </div>
            <div style={{backgroundColor: '#cbc4be'}}>
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
        id
        nodeType
        title
        uri
        seo {
            title
            metaDesc
            focuskw
            metaKeywords
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphTitle
            opengraphDescription
            opengraphImage {
                altText
                sourceUrl
                srcSet
            }
            twitterTitle
            twitterDescription
            twitterImage {
                altText
                sourceUrl
                srcSet
            }
            canonical
            cornerstone
            schema {
                articleType
                pageType
                raw
            }
        }
        clientsPost {
          clientDescription
          clientName
          imageBreaker {
            ... on WpClientImage {
              featuredImage {
                node {
                  id
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
