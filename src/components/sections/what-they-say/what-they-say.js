import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {TestimonialQuery} from "../../../assets/testimonial-query";
import * as whatTheySayStyles from './what-they-say.module.scss';
import Slider from 'react-slick';
import * as serviceStyles from "../service-list.module.scss";

const WhatTheySay = (props) => {
    const {
        wpPage: {
            whatTheySay: {
                whatTheySayGraphicOne,
                whatTheySayGraphicTwo,
                whatTheySayFirstServiceGraphic,
                whatTheySayBackgroundColor,
                whatTheySayTitle
            }
        },
        allWpTestimonial: {
            edges
        }
    } = TestimonialQuery();

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 10000,
        fadeIn: false,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const style = {
        backgroundColor: whatTheySayBackgroundColor
    }

    const subCopyStyle = {
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 600,
        fontStyle: 'italic',
        color:' rgb(102, 75, 43)'
    }

    const testimonials = edges.map((edge, index) => (
        <div key={index}>
            <div className={whatTheySayStyles.testimonialContainer}>
                <div dangerouslySetInnerHTML={{__html: edge.node.content}}/>
                <div className={whatTheySayStyles.signatureContainer}>
                    <div className={whatTheySayStyles.signatureLine}/>
                    <div className={whatTheySayStyles.signatureAndTitle}>
                        <p style={{marginBottom: '16px'}}>{edge.node.testimonialSignature.clientName}</p>
                        <p><span dangerouslySetInnerHTML={{__html: edge.node.testimonialSignature.clientTitle}}/></p>
                    </div>
                </div>
            </div>
        </div>
    ))

    const image1 = whatTheySayGraphicOne &&
        (<div className={whatTheySayStyles.imageContainer}>
            <GatsbyImage image={getImage(whatTheySayGraphicOne.localFile)} alt={""} />
        </div>)
    const image2 = whatTheySayGraphicTwo &&
        (<div className={whatTheySayStyles.imageContainer}>
            <GatsbyImage className={whatTheySayStyles.bottomImage} image={getImage(whatTheySayGraphicTwo.localFile)} alt={""} />
        </div>)
    const firstServiceImage = whatTheySayFirstServiceGraphic &&
        (<div className={whatTheySayStyles.firstServiceGraphic}>
            <GatsbyImage image={getImage(whatTheySayFirstServiceGraphic.localFile)} alt={""} />
        </div>)

    let content;

    if(props.isService) {
        content = (
            <>
                <div id={props.anchor} className={whatTheySayStyles.whatTheySayContainer} style={style}>
                    <div style={{maxWidth: '960px', margin: 'auto'}}>
                        <h2 style={{color: '#664b2b', textAlign: 'center'}}>{props.serviceTitle}</h2>
                        <p style={subCopyStyle}>{props.serviceTitleSubcopy}</p>
                        <div className={serviceStyles.serviceList} dangerouslySetInnerHTML={{__html: props.serviceContent}}/>
                        {props.servicesPartnership ? (<div style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: props.servicesPartnership}}/>) : null}
                        {props.firstService ? firstServiceImage : image1}
                        {props.firstService ? null : image2}
                    </div>
                </div>
            </>
        )
    } else {
        content = (
            <div id={'testimonials'} className={whatTheySayStyles.whatTheySayContainer} style={style}>
                <h2 style={{color: '#664b2b', textAlign: 'center'}}>{whatTheySayTitle}</h2>
                <Slider {...settings}>
                    {testimonials}
                </Slider>
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

export default WhatTheySay;
