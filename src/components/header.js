import * as React from "react"
import * as headerStyles from './header.module.scss';
import * as csLogo from '../images/cs-media-logo.png';
import {Link} from 'gatsby';
import Navigation from "./navigation/navigation";

console.log(csLogo)

const Header = () => (
  <header className={headerStyles.header}>
    <Link to={'/'}><img style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '50px'}} src={csLogo.default} alt="CS Media Logo"/></Link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Navigation/>
    </div>
  </header>
)

export default Header
