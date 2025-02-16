import '../stylesheets/NavBar.css';
import ScrollToRef from "./ScrollToRef.tsx";
import {RefObject} from "react";

function NavBar(props: { contactRef: RefObject<HTMLDivElement>; projectsRef: RefObject<HTMLDivElement>; }) {
    return (
        <div className="NavBar">
            <div className={'NavBar-element'} onClick={() => ScrollToRef(props.projectsRef)}>Projects</div>
            <div className={'NavBar-element'}>About</div>
            <button onClick={() => ScrollToRef(props.contactRef)}>Contact</button>
        </div>
    );
}

export default NavBar;