import '../stylesheets/ContactBar.css';
import githubLogo from '../../public/logo/github.svg';
import linkedinLogo from '../../public/logo/linkedin.svg';

function ContactBar() {
    return (
        <div className="ContactBar">
            <a href={"https://github.com/YonaMoreda/"}><img style={{borderRadius: "50%"}} src={githubLogo}/></a>
            <a href={"https://nl.linkedin.com/in/yona-moreda-116154141"}><img src={linkedinLogo}/></a>
        </div>
    )
}

export default ContactBar;