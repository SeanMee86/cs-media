import {graphql, useStaticQuery} from "gatsby";


export function ServicesQuery() {
    return useStaticQuery(graphql`
        query ServicePageQuery {
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
