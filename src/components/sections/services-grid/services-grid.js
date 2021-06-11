import * as React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import * as servicesGridStyles from './services-grid.module.scss';

const ServicesGrid = () => {
    const {
        allWpService: {
            edges
        }
    } = useStaticQuery(graphql`
        query ServicesQuery {
          allWpService {
            edges {
              node {
                title
              }
            }
          }
        }
    `)
    const services = edges.map((edge, index) => (
        <div className={servicesGridStyles.gridItem} key={index}>
            {edge.node.title}
        </div>
    ))
    return (
        <>
            <div className={servicesGridStyles.gridContainer}>
                {services}
            </div>
        </>
    )
}

export default ServicesGrid;
