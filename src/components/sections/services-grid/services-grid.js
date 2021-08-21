import * as React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import * as servicesGridStyles from './services-grid.module.scss';

const ServicesGrid = (props) => {
    const {
        allWpService: {
            edges
        }
    } = useStaticQuery(graphql`
        query ServicesQuery {
          allWpService(sort: {fields: date, order: ASC}) {
            edges {
              node {
                title
                servicesC {
                    serviceAnchor
                }
              }
            }
          }
        }
    `)
    const services = edges.map((edge, index) => (
        <div className={servicesGridStyles.gridItem} key={index}>
            <Link to={`/services/#${edge.node.servicesC.serviceAnchor}`}>{edge.node.title}</Link>
        </div>
    ))
    return (
        <>
            <div id={'services'} className={servicesGridStyles.gridContainer}>
                {props.break ? null : services}
            </div>
        </>
    )
}

export default ServicesGrid;
