import * as React from 'react';
import * as heroStyles from './hero.module.scss';
import Header from "../header";
import {HeaderQuery} from '../../assets/header-query';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {convertToBgImage} from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";


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

    const image = getImage(heroBackgroundImage.localFile)
    const bgImage = convertToBgImage(image);

    return (
        <>
            <BackgroundImage className={heroStyles.heroContainer} Tag={'section'} {...bgImage} preserveStackingContext>
                <div className={heroStyles.overlay}/>
                <Header/>
                <div style={props.hasText ? serviceHeaderStyle : null} className={heroStyles.heroLogoContainer}>
                    {props.isHome
                        ? (<GatsbyImage
                            className={heroStyles.heroLogo}
                            image={getImage(heroLogo.localFile)} alt=""/>)
                        :
                        (<h1 style={{color: '#fff', position: 'relative', zIndex: 5, fontWeight: 400, textTransform: "uppercase", margin: props.hasText ? 0 : 'inherit'}}>{props.pageTitle}</h1>)
                    }
                </div>
            </BackgroundImage>
        </>
    )
}

export default Hero;
