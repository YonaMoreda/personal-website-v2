import '../stylesheets/Contact.css'
import { forwardRef } from "react";


const Contact= forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="contact" ref={ref}>
            <h1 className="message-header">Leave a message</h1>
            <div className="contact-type">
                <input className="contact-type-input" type="radio" id="private" name="contact-type" value="private"/>
                <label className="contact-type-label" htmlFor="private">Private</label>
                <input className="contact-type-input" type="radio" id="business" name="contact-type" value="business"/>
                <label className="contact-type-label" htmlFor="business">Business</label>
                <input className="contact-type-input" type="radio" id="other" name="contact-type" value="other"/>
                <label className="contact-type-label" htmlFor="other">Other</label>
            </div>
            <textarea className="contact-message-email" rows={1} cols={50} placeholder={"First name"}/>
            <textarea className="contact-message-email" rows={1} cols={50} placeholder={"Last name"}/>
            <textarea className="contact-message-email" rows={1} cols={50} placeholder={"Email"}/>
            <textarea className="contact-message" rows={10} cols={50} placeholder={"Message"}/>
            <button className="reach-out-btn">Send 🚀</button>
        </div>
    )
});

export default Contact;