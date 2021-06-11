import * as React from "react"
import * as headerStyles from './header.module.scss';
import Navigation from "./navigation/navigation";

const Header = () => (
  <header className={headerStyles.header}>
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
