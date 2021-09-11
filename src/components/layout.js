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
import {useState} from "react";

const Layout = ({ children }) => {

  const [formStyles, setFormStyles] = useState({
      maxWidth: 'unset',
      position: 'fixed',
      bottom: '-200px',
      right: '20px',
      transition: '0.24s bottom ease-in-out'
  });

  const buttonStyles = {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '42px',
      height: '60px'
  }

  const scrollToTop = () => {
      window.scroll(0, 0);
  }

  return (
    <>
      <div>
        <main>{children}</main>
        <form style={formStyles}>
            <button onClick={scrollToTop} style={buttonStyles} className={styles.contactBtn} type={"button"}>&#8963;</button>
        </form>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
