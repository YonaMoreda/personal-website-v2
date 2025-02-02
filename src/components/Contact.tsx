import '../stylesheets/Contact.css'
import {forwardRef} from "react";

const isBlank = (str: string) => (!str || /^\s*$/.test(str));

const emailTemplate: string = "Hello from {firstname} {lastname}!%0D%0A%0D%0A" +
    "{message}%0D%0A%0D%0A" +
    "Regards,%0D%0A%0D%0A" +
    "{firstname} {lastname}{organization}"
const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    function sendEmail() {
        const firstname: string = (document.getElementById('contact-message-firstname-id') as HTMLInputElement).value
        const lastname: string = (document.getElementById('contact-message-lastname-id') as HTMLInputElement).value;
        const message: string = (document.getElementById('contact-message-id') as HTMLInputElement).value;

        let organization: string = (document.getElementById('contact-message-company-id') as HTMLInputElement).value;
        organization = !isBlank(organization) ? ' (' + organization + ')' : '';
        const messageBody = emailTemplate.replaceAll('{firstname}', firstname).replaceAll('{lastname}', lastname)
            .replace('{message}', message).replace('{organization}', organization);
        window.location.assign("mailto:yonamoreda@gmail.com?subject=A message from " + firstname + " " + lastname
            + organization + "&body=" + messageBody);
    }

    return (
        <div className="contact" ref={ref}>
            <h1 className="message-header">Hello from</h1>
            <div className={'contact-message-name-container'}>
                <textarea className="contact-message-name" id={'contact-message-firstname-id'} rows={1} cols={50}
                          required={true} placeholder={"First name"}/>
                <textarea className="contact-message-name" id={'contact-message-lastname-id'} rows={1} cols={50}
                          required={true} placeholder={"Last name"}/>
            </div>
            <textarea className="contact-message-company" id={'contact-message-company-id'} rows={1} cols={50}
                      required={true} placeholder={"Company"}/>
            <textarea className="contact-message" id={'contact-message-id'} rows={10} cols={50}
                      placeholder={"Message"}/>
            <button className="reach-out-btn" onClick={sendEmail}>Send 🚀</button>
        </div>
    )
});

export default Contact;