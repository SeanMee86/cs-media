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

    const serviceHeaderStyle = {
        width: '100%',
        maxWidth: '600px',
        borderRadius: '4px',
        border: '1px solid #fff',
        padding: '35px 0 40px',
        margin: '160px 20px',
        textAlign: 'center',
        zIndex: 2
    }

    return (
        <>
            <div
                className={heroStyles.heroContainer}
                style={{backgroundImage: `url(${heroBackgroundImage.sourceUrl})`}}>
                <Header/>
                <div style={props.hasText ? serviceHeaderStyle : null} className={heroStyles.heroLogoContainer}>
                    {props.isHome
                        ? (<img
                        className={heroStyles.heroLogo}
                        src={heroLogo.sourceUrl} alt=""/>)
                        :
                        (<h1 style={{color: '#fff', position: 'relative', zIndex: 5, fontWeight: 400, textTransform: "uppercase", margin: props.hasText ? 0 : 'inherit'}}>{props.pageTitle}</h1>)
                    }
                </div>
            </div>
        </>
    )
}

export default Hero;
