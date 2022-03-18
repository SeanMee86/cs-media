import {graphql, useStaticQuery} from "gatsby";

export function HeaderQuery() {
    return useStaticQuery(graphql`
    query HeaderQuery {
      wpPage(slug: {eq: "home"}) {
        heroFields {
          heroBackgroundImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
          heroLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    }
  `)
}
