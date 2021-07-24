import * as React from 'react';
import * as heyThereStyles from './hey-there.module.scss';
import {HeyThereQuery} from "../../../assets/hey-there-query";

const HeyThere = () => {
    const {
        wpPage: {
            heyThere: {
                heyThereTitle,
                heyThereCopy,
                heyThereBackgroundColor,
                heyThereSignature,
                heyThereJobTitle,
                heyThereImage: {
                    sourceUrl
                },
                heyThereGraphicOne,
                heyThereGraphicTwo
            }
        }
    } = HeyThereQuery();

    const image1 = heyThereGraphicOne ? <div className={heyThereStyles.imageContainer}><img src={heyThereGraphicOne.sourceUrl} alt=""/></div> : null;
    const image2 = heyThereGraphicTwo ? <div className={heyThereStyles.imageContainer}><img src={heyThereGraphicTwo.sourceUrl} alt=""/></div> : null;

    return (
        <>
            <div id={'about'} className={heyThereStyles.heyThereContainer} style={{backgroundColor: heyThereBackgroundColor}}>
                <div className={heyThereStyles.heyThereContent}>
                    <div style={{padding: '0 30px'}}>
                        <img src={sourceUrl} alt=""/>
                    </div>
                    <div>
                        <h2 style={{color: '#9b7963'}}>{heyThereTitle}</h2>
                        <div dangerouslySetInnerHTML={{__html: heyThereCopy}}/>
                        <p className={heyThereStyles.heyThereSignature}>{heyThereSignature}<br/><span>- {heyThereJobTitle}</span></p>
                    </div>
                </div>
                {image1}
                {image2}
            </div>
        </>
    )
}

export default HeyThere;
