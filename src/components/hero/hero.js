import * as React from 'react';
import * as heroStyles from './hero.module.scss';
import Header from "../header";
import {HeaderQuery} from '../../assets/header-query';


const Hero = () => {
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
                <div>
                    <img
                        className={heroStyles.heroLogo}
                        src={heroLogo.sourceUrl} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Hero;
