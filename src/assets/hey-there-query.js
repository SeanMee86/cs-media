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
              heyThereImage {
                sourceUrl
              }
              heyThereGraphicOne {
                sourceUrl
              }
              heyThereGraphicTwo {
                sourceUrl
              }
            }
          }
        }
    `)
}
