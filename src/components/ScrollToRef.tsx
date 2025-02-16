import {RefObject} from "react";


const ScrollToRef = (someRef:RefObject<HTMLDivElement>) => {
    if (someRef.current) {
        window.scrollTo({
            top: someRef.current.offsetTop,
            behavior: "smooth",
        });
    }
};


export default ScrollToRef;