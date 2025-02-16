import '../stylesheets/NavBar.css';
import ScrollToRef from "./ScrollToRef.tsx";
import {RefObject} from "react";

function NavBar(props: { homeRef: RefObject<HTMLDivElement>; contactRef: RefObject<HTMLDivElement>; projectsRef: RefObject<HTMLDivElement>; aboutRef: RefObject<HTMLDivElement>;}) {
    return (
        <div className="NavBar">
            <div className={'NavBar-element'} onClick={() => ScrollToRef(props.homeRef)}>Home</div>
            <div className={'NavBar-element'} onClick={() => ScrollToRef(props.projectsRef)}>Projects</div>
            <div className={'NavBar-element'} onClick={() => ScrollToRef(props.aboutRef)}>About</div>
            <button onClick={() => ScrollToRef(props.contactRef)}>Contact</button>
        </div>
    );
}

export default NavBar;