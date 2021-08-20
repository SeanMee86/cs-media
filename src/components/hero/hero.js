import * as React from 'react';
import * as heroStyles from './hero.module.scss';
import Header from "../header";
import {HeaderQuery} from '../../assets/header-query';


const Hero = (props) => {
    const {
        wpPage: {
            heroFields: {
                heroBackgroundImage,
                heroLogo
            }
        }
    } = HeaderQuery();
    return (
        <>
            <div
                className={heroStyles.heroContainer}
                style={{backgroundImage: `url(${heroBackgroundImage.sourceUrl})`}}>
                <Header/>
                <div className={heroStyles.heroLogoContainer}>
                    {props.isHome
                        ? (<img
                        className={heroStyles.heroLogo}
                        src={heroLogo.sourceUrl} alt=""/>)
                        :
                        (<h1 style={{fontSize: '72px', color: '#fff', position: 'relative', zIndex: 5}}>{props.pageTitle}</h1>)
                    }
                </div>
            </div>
        </>
    )
}

export default Hero;
