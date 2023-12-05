import leftWingLogo from '../../public/visor/left-wing-logo.svg'
import bottomLeftStats from '../../public/visor/bottom-left-stats.svg'
import bottomVisor from '../../public/visor/bottom-visor.svg'
import centerVisor from '../../public/visor/center-visor.svg'
import dateTime from '../../public/visor/date-time.svg'
import leftShoulder from '../../public/visor/left-shoulder.svg'
import rightOrbitVisor from '../../public/visor/right-orbit-visor.svg'
import rightShoulder from '../../public/visor/right-shoulder.svg'
import topRightHealth from '../../public/visor/top-right-health.svg'
import manifestLogo from '../../public/visor/manifest.vel.uix.eth.eff.svg'
import triangle from '../../public/visor/triangle.svg'

function Visor() {
    return (
        <>
            <img src={leftWingLogo} style={{
                position: "absolute",
                left: 50,
                top: (window.innerHeight / 2) - (738 / 2),
                textAlign: "center"
            }}/>
            <img src={bottomLeftStats} style={{position: "absolute", left: 150, bottom: 50, textAlign: "center"}}/>
            <img src={bottomVisor}
                 style={{position: "absolute", left: window.innerWidth / 2, bottom: 50, textAlign: "center"}}/>
            <img src={centerVisor} style={{
                position: "absolute",
                left: (window.innerWidth / 2) - (1012 / 2),
                top: (window.innerHeight / 2) - (736 / 2),
                textAlign: "center"
            }}/>
            <img src={dateTime} style={{position: "absolute", left: 150, top: 50, textAlign: "center"}}/>
            <img src={leftShoulder} style={{
                position: "absolute",
                left: 270,
                top: (window.innerHeight / 2) - (320 / 2),
                textAlign: "center"
            }}/>
            <img src={rightOrbitVisor} style={{position: "absolute", right: 50, bottom: 50, textAlign: "center"}}/>
            <img src={rightShoulder} style={{
                position: "absolute",
                right: 270,
                top: (window.innerHeight / 2) - (320 / 2),
                textAlign: "center"
            }}/>
            <img src={topRightHealth} style={{position: "absolute", right: 50, top: 50, textAlign: "center"}}/>
            <img src={manifestLogo} style={{
                position: "absolute",
                right: 50,
                top: (window.innerHeight / 2) - (215 / 2),
                textAlign: "center"
            }}/>
            <img src={triangle} style={{
                position: "absolute",
                left: 50,
                top: (window.innerHeight / 2) - (215 / 2) + 215,
                textAlign: "center"
            }}/>
        </>
    )
}

export default Visor