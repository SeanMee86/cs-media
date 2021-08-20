import * as React from 'react';
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import {graphql} from "gatsby";
import HeyThere from "../components/sections/hey-there/hey-there";
import WhatTheySay from "../components/sections/what-they-say/what-they-say";

const ServicesPage = ({data}) => {
    const {
        allWpService: {
            edges
        }
    } = data;
    console.log(edges)
    const services = edges.reverse().map((edge, index) => {
        return index % 2 !== 0
        ? (
            <WhatTheySay
                key={index}
                isService={true}
                serviceTitle={edge.node.title}
                serviceTitleSubcopy={edge.node.servicesC.servicesTitleSubcopy}
                serviceContent={edge.node.servicesC.servicesContent}
                servicesPartnership={edge.node.servicesC.servicesPartnership} />
        )
        : (
            <HeyThere
                key={index}
                isService={true}
                serviceTitle={edge.node.title}
                serviceTitleSubcopy={edge.node.servicesC.servicesTitleSubcopy}
                serviceContent={edge.node.servicesC.servicesContent}
                servicesPartnership={edge.node.servicesC.servicesPartnership} />
            )
    })
    return (
        <Layout>
            <Hero pageTitle={'Services'}/>
            {services}
        </Layout>
    )
}

export default ServicesPage;

export const query = graphql`
    query ServicePageQuery {
      allWpService {
        edges {
          node {
            servicesC {
              servicesContent
              servicesTitleSubcopy
              servicesPartnership
            }
            title
          }
        }
      }
    }
`