import * as React from "react";
import * as formStyles from './form.module.scss'

export const Form = () => (
    <>
        <form className={formStyles.formContainer} name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
            <div>
                <div className={formStyles.formColumn}>
                    <div>
                        <input type="hidden" name="form-name" value="contact"/>
                        <p style={{marginTop: 0}}>
                            <label className='labels' htmlFor='name'>Full Name:</label>
                            <input id='name' type="text" name="name"/>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label className='labels' htmlFor='email'>Email:</label>
                            <input id='email' type="email" name="email"/>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label className='labels' htmlFor='subject'>Subject:</label>
                            <input id='subject' type="text" name="subject"/>
                        </p>
                    </div>
                </div>
                <div className={formStyles.formColumn}>
                    <div style={{height: '100%'}}>
                        <p style={{marginTop: 0, height: '100%'}}>
                            <label className='labels' htmlFor='message'>Message:</label>
                            <textarea style={{height: '100%', marginBottom: 0, minHeight: '150px'}} id='message' name="message"/>
                        </p>
                    </div>
                </div>
            </div>
            <button className={formStyles.contactBtn} type="submit">REACH OUT!</button>
        </form>
    </>
)

export default Form;
