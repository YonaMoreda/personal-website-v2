import '../stylesheets/NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <a href={"/home"}>Home</a>
            {/*<Link to="/personal-website-v2/journey">My Journey</Link>*/}
            <a href={"/experience"}>Experience</a>
            <a href={"/projects"}>Projects</a>
            <a href={"/contact"}>Contact</a>
        </div>
    );
}

export default NavBar;