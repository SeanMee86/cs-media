import * as React from 'react';
import * as heyThereStyles from './hey-there.module.scss';
import {HeyThereQuery} from "../../../assets/hey-there-query";
import ServicesGrid from "../services-grid/services-grid";
import * as serviceStyles from "../service-list.module.scss";

const HeyThere = (props) => {
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

    let content;

    if(props.isService) {
        content = (
            <>
                <div id={props.anchor} className={heyThereStyles.heyThereContainer} style={{backgroundColor: heyThereBackgroundColor}}>
                    <div className={heyThereStyles.heyThereContent}>
                        <div>
                            <h2 style={{color: '#9b7963', textAlign: 'center'}}>{props.serviceTitle}</h2>
                            <p style={{textAlign: 'center'}}>{props.serviceTitleSubcopy}</p>
                            <div className={serviceStyles.serviceList} dangerouslySetInnerHTML={{__html: props.serviceContent}}/>
                            {props.servicesPartnership ? (<div style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: props.servicesPartnership}}/>) : null}
                        </div>
                    </div>
                    {image1}
                    {image2}
                </div>
                <ServicesGrid break={true}/>
            </>
        )
    } else {
        content = (
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
        )
    }

    return (
        <>
            {content}
        </>
    )
}

export default HeyThere;
