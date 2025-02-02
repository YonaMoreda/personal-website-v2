import '../stylesheets/ContactBar.css';
import githubLogo from '../../public/logo/github.svg';
import linkedinLogo from '../../public/logo/linkedin.svg';
import ResumeIcon from '../../public/logo/CV.png'
import ResumeFile from '../../public/documents/resume_yona_moreda.pdf'

function ContactBar() {
    return (
        <div className="ContactBar">
            <a href={"https://github.com/YonaMoreda/"}><img style={{borderRadius: "50%"}} src={githubLogo}/></a>
            <a href={ResumeFile} target={'_blank'}><img style={{width: '40px', padding: '0', borderRadius: "10%"}} src={ResumeIcon} alt={'resume'}/></a>
            <a href={"https://nl.linkedin.com/in/yona-moreda-116154141"}><img src={linkedinLogo} alt={'linkedin'}/></a>
        </div>
    )
}


export default ContactBar;