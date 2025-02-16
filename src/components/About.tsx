import '../stylesheets/About.css'
import {forwardRef} from "react";
import profilePicture from '../../public/profile-pictures/IMG_7682.png'

const About = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="about" ref={ref}>
            <div className={'about-container'}>
                <div className={'about-description'}>
                    <div className={'about-title'}>
                        About Me
                    </div>
                    Hi, I am Yona Moreda, a passionate software engineer originally from Ethiopia
                    currently working in Rabobank. I studied Computing Science BSc at RUG (2017-20).
                    Working in Rabobank as a Back-End AWS cloud native software engineer.<br/><br/>

                    I worked on processing of 24/7 available
                    critical systems mainly in the processing of batch transactions (PAIN ISO
                    20022) supporting millions of transactions at once under Instant Payments
                    scheme and as well as delivering automatic return which supports Rabobank
                    ~9 million clients to handle returns for scheduled debt collections. I worked
                    with a team of 5 to deliver 5 microservices built from the ground up with AWS.
                </div>
                <div className={'profile-image'}>
                    <img src={profilePicture} alt={'profile-picture'}/>
                </div>
            </div>
        </div>
    )
});

export default About;