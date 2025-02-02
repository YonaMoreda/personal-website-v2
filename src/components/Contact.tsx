import '../stylesheets/Contact.css'
import {forwardRef} from "react";

const emailTemplate: string = "Hello from {firstname} {lastname}!%0D%0A%0D%0A" +
    "{message}%0D%0A%0D%0A" +
    "Regards,%0D%0A%0D%0A" +
    "{firstname} {lastname} ({contactType})"
const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    function sendEmail() {
        const firstname: string = document.getElementById('contact-message-firstname-id')?.value;
        const lastname: string = document.getElementById('contact-message-lastname-id')?.value;
        const message: string = document.getElementById('contact-message-id')?.value;
        let contactType = document.getElementById('private')?.checked ? document.getElementById('private')?.value : '';
        contactType += document.getElementById('business')?.checked ? document.getElementById('business')?.value : '';
        contactType += document.getElementById('other')?.checked ? document.getElementById('other')?.value : '';
        const messageBody = emailTemplate.replaceAll('{firstname}', firstname).replaceAll('{lastname}', lastname)
            .replace('{message}', message).replace('{contactType}', contactType);
        window.location.assign("mailto:yonamoreda@gmail.com?subject=A message from " + firstname + " " + lastname
            + " (" + contactType + ")" + "&body=" + messageBody);
    }

    return (
        <div className="contact" ref={ref}>
            <h1 className="message-header">Leave a message</h1>
            <div className="contact-type">
                <input className="contact-type-input" type="radio" id="private" name="contact-type" value="Private"/>
                <label className="contact-type-label" htmlFor="private">Private</label>
                <input className="contact-type-input" type="radio" id="business" name="contact-type" value="Business"/>
                <label className="contact-type-label" htmlFor="business">Business</label>
                <input className="contact-type-input" type="radio" id="other" name="contact-type" value="Other"/>
                <label className="contact-type-label" htmlFor="other">Other</label>
            </div>
            <div className={'contact-message-name-container'}>
                <textarea className="contact-message-name" id={'contact-message-firstname-id'} rows={1} cols={50}
                          required={true} placeholder={"First name"}/>
                <textarea className="contact-message-name" id={'contact-message-lastname-id'} rows={1} cols={50}
                          required={true} placeholder={"Last name"}/>
            </div>
            <textarea className="contact-message" id={'contact-message-id'} rows={10} cols={50}
                      placeholder={"Message"}/>
            <button className="reach-out-btn" onClick={sendEmail}>Send 🚀</button>
        </div>
    )
});

export default Contact;