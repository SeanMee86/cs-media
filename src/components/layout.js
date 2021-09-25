/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./form/form.module.scss";
import * as backToTopButton from '../images/btb-button.png'
import {useEffect, useState} from "react";

const Layout = ({ children }) => {

    const [offset, setOffSet] = useState(0);
    console.dir(backToTopButton)
    useEffect(() => {
        window.onscroll = () => {
            setOffSet(window.pageYOffset);
        }
    }, [])

    useEffect(() => {
        if(offset > 70) {
            setFormStyles({
                bottom: '20px'
            })
        } else {
            setFormStyles({
                bottom: '-200px'
            })
        }
    }, [offset])

    const [formStyles, setFormStyles] = useState({
        bottom: '-200px'
    });

    const buttonStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '42px',
        height: '60px'
    }

    const scrollToTop = () => {
        window.scroll(0, 0);
    }

    return (
        <>
            <div>
                <main style={{overflow: 'hidden'}}>{children}</main>
                <form className={'back-to-top'} style={formStyles}>
                    <button
                        aria-label={'Back to Top Button'}
                        onClick={scrollToTop}
                        style={buttonStyles}
                        className={styles.contactBtn}
                        type={"button"}><img style={{maxWidth: '100%'}} src={backToTopButton.default} alt=""/></button>
                </form>
            </div>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
