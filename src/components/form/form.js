import * as React from "react";
import * as formStyles from './form.module.scss'

export const Form = () => (
    <>
        <form className={formStyles.formContainer} name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
            <div>
                <div className={formStyles.formColumn}>
                    <input type="hidden" name="form-name" value="contact"/>
                    <p>
                        <label className='labels' htmlFor='name'>Full Name:</label>
                        <input id='name' type="text" name="name"/>
                    </p>
                </div>
                <div className={formStyles.formColumn}>
                    <p>
                        <label className='labels' htmlFor='email'>Email:</label>
                        <input id='email' type="email" name="email"/>
                    </p>
                </div>
            </div>
            <button className={formStyles.contactBtn} type="submit">REACH OUT!</button>
        </form></>
)

export default Form;
