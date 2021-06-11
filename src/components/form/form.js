import * as React from "react";
import * as formStyles from './form.module.scss'

export const Form = () => (
    <>
        <form className={formStyles.formContainer} name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
            <div>
                <input type="hidden" name="form-name" value="contact"/>
                <div>
                    <p>
                        <label className='labels' htmlFor='name'>Name</label>
                        <input id='name' type="text" name="name"/>
                    </p>
                    <p>
                        <label className='labels' htmlFor='email'>Email</label>
                        <input id='email' type="email" name="email"/>
                    </p>
                </div>
                <p>
                    <label className='labels' htmlFor='subject'>Subject</label>
                    <input id='subject' type="text" name="subject"/>
                </p>
            </div>
            <div>
                <p>
                    <label className='labels' htmlFor='message'>Message</label>
                    <textarea id='message'  name="message"/>
                </p>
                <p>
                    <button className='contactBtn' type="submit">Send</button>
                </p>
            </div>
        </form></>
)

export default Form;
