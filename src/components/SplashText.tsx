import '../stylesheets/SplashText.css'
import lookAround from '../../public/look-around.svg'

function SplashText() {
    return (
        <>
            <div className="splash-text">
                <h1 id="header-intro"/>
                <p id="header-subtitle" style={{textAlign: "right"}}/>
                <p id="subintro"/>
                <p id="underscore"/>
                <p id="description"/>
                <p id="working-since"/>
                <p id="passion-description"/>
            </div>
            <button id='reach-out-btn-id' className="reach-out-btn" hidden disabled>Reach out</button>
            <button id='explore-btn-id' className="explore-btn" hidden disabled>Explore</button>
            <img className="look-around-img" src={lookAround}/>
        </>
    )
}

export default SplashText