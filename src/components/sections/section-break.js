import * as React from 'react';
import {HeaderQuery} from '../../assets/header-query';
import * as sectionBreakStyles from './section-break.module.scss';

const SectionBreak = () => {
    const {
        wpPage: {
            heroFields: {
                heroBackgroundImage
            }
        }
    } = HeaderQuery();
    const style = {
        backgroundImage: `url(${heroBackgroundImage.sourceUrl})`,
        backgroundSize: 'cover',
        height: '200px'
    }

    return(
        <div className={sectionBreakStyles.sectionBreak} style={style}/>
    )
}

export default SectionBreak;
