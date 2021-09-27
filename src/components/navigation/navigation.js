import * as React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import * as navStyles from './navigation.module.scss';
import './navigation.scss';
import {useState} from "react";

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

    const onLinkClick = () => {
        setCheckboxState(false);
        setMenuClass([navStyles.navList])
        document.querySelector('html').style.height = '';
        document.querySelector('html').style.overflow = '';
    }

    const [menuClass, setMenuClass] = useState([
        navStyles.navList
    ])

    const [checkboxState, setCheckboxState] = useState(false);

    const menuItems = nodes.map((node, index) => (
        <li key={index}>
            <Link
                to={node.url}
                className={navStyles.navListAnchor}
                onClick={onLinkClick}>{node.label}</Link>
        </li>
    ))

    const onInputToggle = (e) => {
        if(e.target.checked) {
            setMenuClass([...menuClass, 'show'])
            document.querySelector('html').style.height = '100vh';
            document.querySelector('html').style.overflow = 'hidden';
        } else {
            setMenuClass([navStyles.navList])
            document.querySelector('html').style.height = '';
            document.querySelector('html').style.overflow = '';
        }
    }



    return (
        <nav className="nav-primary">
            <input
                type="checkbox"
                className="nav__mobile-input"
                onClick={() => setCheckboxState(!checkboxState)}
                onChange={onInputToggle}
                checked={checkboxState} />
            <div className="nav__hamburger-container">
                <div className="nav__hamburger"/>
            </div>
            <ul id={'menu-primary-navigation'} className={menuClass.join(' ')}>
                {menuItems}
            </ul>
        </nav>
    )
}

export default Navigation;
