import {graphql, useStaticQuery} from "gatsby";

export function TestimonialQuery() {
    return useStaticQuery(graphql`
        query TestimonialQuery {
          wpPage(slug: {eq: "home"}) {
            whatTheySay {
              whatTheySayGraphicOne {
                sourceUrl
              }
              whatTheySayGraphicTwo {
                sourceUrl
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
                }
              }
            }
          }
        }
    `)
}
