import * as React from "react"

import Layout from "../../components/layout"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Hero from "../../components/hero/hero";
import HeyThere from "../../components/sections/hey-there/hey-there";
import ServicesGrid from "../../components/sections/services-grid/services-grid";
import SectionBreak from "../../components/sections/section-break";
import WhatTheySay from "../../components/sections/what-they-say/what-they-say";
import Contact from "../../components/sections/contact/contact";
import {graphql} from "gatsby";

const HomePageTemplate = ({data: {wpPage}}) => {
    return (
        <Layout>
            <Seo post={wpPage} />
            <Hero isHome={true}/>
            <HeyThere/>
            <ServicesGrid/>
            <SectionBreak/>
            <WhatTheySay/>
            <Contact/>
        </Layout>
    )
}
export default HomePageTemplate;

export const query = graphql`
    query HomePageTemplateQuery($id: String!) {
        wpPage(id: {eq: $id}) {
            id
            nodeType
            title
            uri
            seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    localFile {
                        publicURL
                    }
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
    }
`
