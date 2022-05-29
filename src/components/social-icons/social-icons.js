import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faPinterest,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";
import * as styles from './social-icons.module.scss';

const SocialIcons = () => {
    return (
        <div className={styles.socialIconsContainer}>
            <a className={styles.socialIcons} aria-label={'CS Media Instagram'} href="https://www.instagram.com/c.s.mediaoc/" target={"_blank"} rel={'noreferrer'}>
                <FontAwesomeIcon icon={faInstagram} size={'2x'}/>
            </a>
            <a className={styles.socialIcons} aria-label={'CS Media Facebook'} href="https://www.facebook.com/c.s.mediaoc" target={"_blank"} rel={'noreferrer'}>
                <FontAwesomeIcon className={styles.socialIcons} icon={faFacebook} size={'2x'}/>
            </a>
            <a className={styles.socialIcons} aria-label={'CS Media LinkedIn'} href="https://www.linkedin.com/company/74724925/admin/" target={"_blank"} rel={'noreferrer'}>
                <FontAwesomeIcon className={styles.socialIcons} icon={faLinkedin} size={'2x'}/>
            </a>
            <a className={styles.socialIcons} aria-label={'CS Media Pinterest'} href="https://www.pinterest.com/csmediaoc/_saved/" target={"_blank"} rel={'noreferrer'}>
                <FontAwesomeIcon className={styles.socialIcons} icon={faPinterest} size={'2x'}/>
            </a>
            <a className={styles.socialIcons} aria-label={'CS Media TikTok'} href="https://www.tiktok.com/t/ZTdWQvYJg/" target={"_blank"} rel={'noreferrer'}>
                <FontAwesomeIcon className={styles.socialIcons} icon={faTiktok} size={'2x'}/>
            </a>
        </div>
    )
}

export default SocialIcons;
