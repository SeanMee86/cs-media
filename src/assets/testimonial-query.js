import {graphql, useStaticQuery} from "gatsby";

export function TestimonialQuery() {
    return useStaticQuery(graphql`
        query TestimonialQuery {
          wpPage(slug: {eq: "home"}) {
            whatTheySay {
              whatTheySayGraphicOne {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              whatTheySayGraphicTwo {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              whatTheySayFirstServiceGraphic {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              whatTheySayBackgroundColor
              whatTheySayTitle
            }
          }
          allWpTestimonial {
            edges {
              node {
                title
                content
                testimonialSignature {
                  clientName
                  clientTitle
                }
              }
            }
          }
        }
    `)
}
