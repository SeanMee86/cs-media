import * as React from 'react';
import Layout from "../../components/layout";
import Hero from "../../components/hero/hero";
import HeyThere from "../../components/sections/hey-there/hey-there";
import WhatTheySay from "../../components/sections/what-they-say/what-they-say";
import Contact from "../../components/sections/contact/contact";
import Seo from "../../components/seo";
import {ServicesQuery} from "../../assets/services-query";

const ServicesPageTemplate = () => {
    const {
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
        return index % 2 !== 0
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
    })
    return (
        <Layout>
            <Seo title={'Services'} />
            <Hero pageTitle={'Services'}/>
            {services}
            <Contact/>
        </Layout>
    )
}

export default ServicesPageTemplate;
