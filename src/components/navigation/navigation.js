import * as React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import * as navStyles from './navigation.module.scss';

const Navigation = () => {
    const {
        wpMenu: {
            menuItems: {
                nodes
            }
        }
    } = useStaticQuery(graphql `query MenuQuery {
        wpMenu(name: {eq: "Primary Navigation"}) {
            menuItems {
                nodes {
                    label
                    url
                }
            }
        }
    }`)
    const menuItems = nodes.map((node, index) => (
        <li key={index}><Link to={node.url} className={navStyles.navListAnchor}>{node.label}</Link></li>
    ))
    return (
        <div>
            <ul className={navStyles.navList}>
                {menuItems}
            </ul>
        </div>
    )
}

export default Navigation;
