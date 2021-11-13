import * as React from 'react';
import SocialIcons from "./social-icons/social-icons";
import * as styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <SocialIcons/>
        </div>
    )
}

export default Footer;