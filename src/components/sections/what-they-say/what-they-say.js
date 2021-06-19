import * as React from "react";
import {TestimonialQuery} from "../../../assets/testimonial-query";
import * as whatTheySayStyles from './what-they-say.module.scss';
import Slider from 'react-slick';

const WhatTheySay = () => {
    const {
        wpPage: {
            whatTheySay: {
                whatTheySayGraphicOne,
                whatTheySayGraphicTwo,
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

    const testimonials = edges.map((edge, index) => (
        <div>
            <div className={whatTheySayStyles.testimonialContainer} key={index}>
                <div dangerouslySetInnerHTML={{__html: edge.node.content}}/>
                <div className={whatTheySayStyles.signatureContainer}>
                    <div className={whatTheySayStyles.signatureLine}/>
                    <p>{edge.node.testimonialSignature.clientName}</p>
                </div>
            </div>
        </div>
    ))

    const image1 = whatTheySayGraphicOne ? <div className={whatTheySayStyles.imageContainer}><img src={whatTheySayGraphicOne.sourceUrl} alt=""/></div> : null;
    const image2 = whatTheySayGraphicTwo ? <div className={whatTheySayStyles.imageContainer}><img src={whatTheySayGraphicTwo.sourceUrl} alt=""/></div> : null;

    return (
        <>
            <div id={'testimonials'} className={whatTheySayStyles.whatTheySayContainer} style={style}>
                <h2 style={{color: '#664b2b', textAlign: 'center'}}>{whatTheySayTitle}</h2>
                <Slider {...settings}>
                    {testimonials}
                </Slider>
                {image1}
                {image2}
            </div>
        </>
    )
}

export default WhatTheySay;
