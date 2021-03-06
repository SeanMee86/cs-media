import * as React from 'react';
import * as heyThereStyles from './hey-there.module.scss';
import {HeyThereQuery} from "../../../assets/hey-there-query";
import * as serviceStyles from "../service-list.module.scss";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

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
                    localFile
                },
                heyThereGraphicOne,
                heyThereGraphicTwo,
                heyThereSecondServiceGraphic
            }
        }
    } = HeyThereQuery();

    const image1 = heyThereGraphicOne &&
        (<div className={heyThereStyles.imageContainer}>
            <GatsbyImage image={getImage(heyThereGraphicOne.localFile)} alt=""/>
        </div>)
    const image2 = heyThereGraphicTwo &&
        (<div className={heyThereStyles.imageContainer}>
            <GatsbyImage style={{position: 'absolute', bottom: 0}} image={getImage(heyThereGraphicTwo.localFile)} alt=""/>
        </div>)
    const secondServiceImage = heyThereSecondServiceGraphic &&
        (<div className={heyThereStyles.secondServiceGraphic}>
            <GatsbyImage style={{position: 'absolute', bottom: 0, right: 0, height: '100%'}} image={getImage(heyThereSecondServiceGraphic.localFile)} alt=""/>
        </div>)

    const subCopyStyle = {
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 600,
        fontStyle: 'italic',
        color:' rgb(102, 75, 43)'
    }

    let content;

    if(props.isService) {
        content = (
            <>
                <div id={props.anchor} className={heyThereStyles.heyThereContainer} style={{backgroundColor: heyThereBackgroundColor}}>
                    <div style={props.isService && {display: 'flex'}} className={heyThereStyles.heyThereContent}>
                        <div>
                            <h2 style={{color: '#9b7963', textAlign: 'center'}}>{props.serviceTitle}</h2>
                            <p style={subCopyStyle}>{props.serviceTitleSubcopy}</p>
                            <div className={serviceStyles.serviceList} dangerouslySetInnerHTML={{__html: props.serviceContent}}/>
                            {props.servicesPartnership ? (<div style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: props.servicesPartnership}}/>) : null}
                        </div>
                    </div>
                    {props.secondService ? null : image1}
                    {props.secondService ? secondServiceImage : image2}
                </div>
            </>
        )
    } else {
        content = (
            <div id={'about'} className={heyThereStyles.heyThereContainer} style={{backgroundColor: heyThereBackgroundColor}}>
                <div className={heyThereStyles.heyThereContent}>
                    <div className={heyThereStyles.image} style={{padding: '0 30px'}}>
                        <GatsbyImage image={getImage(localFile)} alt=""/>
                    </div>
                    <div className={heyThereStyles.heyThereCopy}>
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
