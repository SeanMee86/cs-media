import * as React from 'react';
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import HeyThere from "../components/sections/hey-there/hey-there";
import WhatTheySay from "../components/sections/what-they-say/what-they-say";
import Contact from "../components/sections/contact/contact";
import Seo from "gatsby-plugin-wpgraphql-seo";
import {ServicesQuery} from "../assets/services-query";

const ServicesPage = () => {
    const {
        wpPage,
        allWpService: {
            edges
        }
    } = ServicesQuery();
    const services = edges.map((edge, index) => {
        const {
            node: {
                title,
                servicesC: {
                    serviceAnchor,
                    servicesTitleSubcopy,
                    servicesPartnership,
                    servicesContent
                }
            }
        } = edge;
        if(index === 2) {
            return (
                <WhatTheySay
                    key={index}
                    anchor={serviceAnchor}
                    isService={true}
                    firstService={true}
                    serviceTitle={title}
                    serviceTitleSubcopy={servicesTitleSubcopy}
                    serviceContent={servicesContent}
                    servicesPartnership={servicesPartnership} />
            )
        } else if(index === 3) {
            return (
                <HeyThere
                    key={index}
                    anchor={serviceAnchor}
                    isService={true}
                    secondService={true}
                    serviceTitle={title}
                    serviceTitleSubcopy={servicesTitleSubcopy}
                    serviceContent={servicesContent}
                    servicesPartnership={servicesPartnership} />
            )
        } else {
            return index % 2 === 0
                ? (
                    <WhatTheySay
                        key={index}
                        anchor={serviceAnchor}
                        isService={true}
                        serviceTitle={title}
                        serviceTitleSubcopy={servicesTitleSubcopy}
                        serviceContent={servicesContent}
                        servicesPartnership={servicesPartnership} />
                )
                : (
                    <HeyThere
                        key={index}
                        anchor={serviceAnchor}
                        isService={true}
                        serviceTitle={title}
                        serviceTitleSubcopy={servicesTitleSubcopy}
                        serviceContent={servicesContent}
                        servicesPartnership={servicesPartnership} />
                )
        }
    })
    return (
        <Layout>
            <Seo post={wpPage} />
            <Hero hasText={true} pageTitle={'Services'}/>
            {services}
            <Contact/>
        </Layout>
    )
}
export default ServicesPage;
