import '../stylesheets/NavBar.css';
import ScrollToRef from "./ScrollToRef.tsx";
import {RefObject} from "react";

function NavBar(props: { scrollToRef: RefObject<HTMLDivElement>; }) {
    return (
        <div className="NavBar">
            {/*<a href={"/home"}>Home</a>*/}
            {/*<Link to="/personal-website-v2/journey">My Journey</Link>*/}
            <a href={"/projects"}>Projects</a>
            <a href={"/experience"}>About</a>
            <button onClick={() => ScrollToRef(props.scrollToRef)}>Contact</button>
        </div>
    );
}

export default NavBar;