import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import * as contactStyles from './contact.module.scss';
import Form from "../../form/form";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Contact = () => {
    const {
        wpPage: {
            getOnTheList: {
                getOnTheListCopy,
                getOnTheListImage: {
                    localFile
                },
                getOnTheListTitle
            }
        }
    } = useStaticQuery(graphql`
        query MyQuery {
          wpPage(slug: {eq: "home"}) {
            getOnTheList {
              getOnTheListCopy
              getOnTheListImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              getOnTheListTitle
            }
          }
        }
    `)
    return (
        <>
            <div id={'contact'} className={contactStyles.getOnTheListContainer}>
                <div className={contactStyles.imageContainer}>
                    <GatsbyImage image={getImage(localFile)} alt=""/>
                </div>
                <div>
                    <h2 style={{color: '#805b52'}}>{getOnTheListTitle}</h2>
                    <div dangerouslySetInnerHTML={{__html: getOnTheListCopy}}/>
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default Contact;
