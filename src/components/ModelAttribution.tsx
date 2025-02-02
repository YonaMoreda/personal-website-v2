import '../stylesheets/ModelAttribution.css'

const ModelAttribution = () => {
    return (<div className={'model-attribution'}>
        <a href={"https://sketchfab.com/LasquetiSpice"} target={'_blank'}>
            Astronaut 3D Author: LasquetiSpice .
        </a>
        <a target={'_blank'} href={"https://sketchfab.com/3d-models/animated-astronaut-character-in-space-suit-loop-8fe5c8d3365e4d87bb7bc253d53a64e1"}>
            . Source: Sketchfab.com .
        </a>
        <a target={'_blank'} href={"http://creativecommons.org/licenses/by/4.0/"}>
            . CC-BY-4.0
        </a>
    </div>)
}

export default ModelAttribution;