import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero";
import HeyThere from "../components/sections/hey-there/hey-there";
import ServicesGrid from "../components/sections/services-grid/services-grid";
import SectionBreak from "../components/sections/section-break";
import WhatTheySay from "../components/sections/what-they-say/what-they-say";
import Contact from "../components/sections/contact/contact";



const IndexPage = () => {

    return (
        <Layout>
            <Seo title="Home" />
            <Hero/>
            <HeyThere/>
            <ServicesGrid/>
            <SectionBreak/>
            <WhatTheySay/>
            <Contact/>
        </Layout>
    )
}

export default IndexPage
