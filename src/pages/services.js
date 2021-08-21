import * as React from 'react';
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import HeyThere from "../components/sections/hey-there/hey-there";
import WhatTheySay from "../components/sections/what-they-say/what-they-say";
import Contact from "../components/sections/contact/contact";

const ServicesPage = ({data}) => {
    const {
        allWpService: {
            edges
        }
    } = data;
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
            <>
                <WhatTheySay
                    key={index}
                    anchor={serviceAnchor}
                    isService={true}
                    serviceTitle={title}
                    serviceTitleSubcopy={servicesTitleSubcopy}
                    serviceContent={servicesContent}
                    servicesPartnership={servicesPartnership} />
            </>
        )
        : (
            <>
                <HeyThere
                    key={index}
                    anchor={serviceAnchor}
                    isService={true}
                    serviceTitle={title}
                    serviceTitleSubcopy={servicesTitleSubcopy}
                    serviceContent={servicesContent}
                    servicesPartnership={servicesPartnership} />
            </>
            )
    })
    return (
        <Layout>
            <Hero pageTitle={'Services'}/>
            {services}
            <Contact/>
        </Layout>
    )
}

export default ServicesPage;

export const query = graphql`
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
`
