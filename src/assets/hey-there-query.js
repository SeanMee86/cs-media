import {graphql, useStaticQuery} from "gatsby";

export function HeyThereQuery() {
    return useStaticQuery(graphql`
        query HeyThereQuery {
          wpPage(slug: {eq: "home"}) {
            heyThere {
              heyThereTitle
              heyThereCopy
              heyThereBackgroundColor
              heyThereSignature
              heyThereJobTitle
              heyThereImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              heyThereGraphicOne {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              heyThereGraphicTwo {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              heyThereSecondServiceGraphic {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
            }
          }
        }
    `)
}
