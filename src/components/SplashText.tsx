import '../stylesheets/SplashText.css'

function SplashText() {
    return (
        <>
            <div className="splash-text">
                <h1>Hey, this is Yona Moreda</h1>
                <p style={{textAlign: "right"}}>(from space?)<br/><br/></p>
                <p>Thanks for your interest in visiting my website.</p>

                <p>________</p>
                <p>I am Software Engineer currently working in the AWS clouds (Rabobank).</p>
                <p>I have passion for creating software such as the one you are seeing right now.</p>
                <p>Feel free to look around and provide feedback if you have so.</p>
            </div>
            <button className="reach-out-btn">Reach out</button>

        </>
    )
}

export default SplashText