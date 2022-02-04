import {graphql, useStaticQuery} from "gatsby";


export function ServicesQuery() {
    return useStaticQuery(graphql`
        query ServicePageQuery {
        wpPage(id: {eq: "cG9zdDoyMzc="}) {
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
        }
          allWpService(sort: {fields: date, order: ASC}) {
            edges {
              node {
                servicesC {
                  servicesContent
                  servicesTitleSubcopy
                  servicesPartnership
                  serviceAnchor
                }
                title
              }
            }
          }
        }
    `)
}
