import * as React from 'react';
import {graphql, useStaticQuery} from "gatsby";
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
        <li key={index}><a className={navStyles.navListAnchor} href={node.url}>{node.label}</a></li>
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
