import * as React from "react"
import * as headerStyles from './header.module.scss';
import * as csLogo from '../images/cs-media-logo.png';
import {Link} from 'gatsby';
import Navigation from "./navigation/navigation";

console.log(csLogo)

const Header = () => (
  <header className={headerStyles.header}>
    <Link to={'/'}>
        <img
            className={headerStyles.headerLogo}
            src={csLogo.default} alt="CS Media Logo"
        />
    </Link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 7.0875rem`,
      }}
    >
      <Navigation/>
    </div>
  </header>
)

export default Header
