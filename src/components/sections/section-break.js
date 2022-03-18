import * as React from 'react';
import {HeaderQuery} from '../../assets/header-query';
import * as sectionBreakStyles from './section-break.module.scss';
import {getImage} from "gatsby-plugin-image";
import {convertToBgImage} from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const SectionBreak = () => {
    const {
        wpPage: {
            heroFields: {
                heroBackgroundImage
            }
        }
    } = HeaderQuery();
    const style = {
        backgroundSize: 'cover',
        height: '200px'
    }
    const image = getImage(heroBackgroundImage.localFile)
    const bgImage = convertToBgImage(image);

    return(
        <BackgroundImage
            Tag={'section'}
            className={sectionBreakStyles.sectionBreak}
            style={style}
            {...bgImage}/>
    )
}

export default SectionBreak;
