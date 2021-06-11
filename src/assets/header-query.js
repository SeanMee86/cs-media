import {graphql, useStaticQuery} from "gatsby";

export function HeaderQuery() {
    return useStaticQuery(graphql`
    query HeaderQuery {
      wpPage(slug: {eq: "home"}) {
        heroFields {
          heroBackgroundImage {
            sourceUrl
          }
          heroLogo {
            sourceUrl
          }
        }
      }
    }
  `)
}
