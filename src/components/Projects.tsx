import '../stylesheets/Projects.css'
import snakeScreenshot from '../../public/projects-showcase/snake-game-demo.gif';
import anneVideo from '../../public/projects-showcase/anne-video.mp4';
import githubLogo from '../../public/logo/github.svg';
import {forwardRef} from "react";

const Projects= forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="projects" ref={ref}>
            <div className="projects-title">Projects</div>
            <div className="projects-container">
                <div className="project">
                    <div className="project-screenshot">
                        <img src={snakeScreenshot} alt={'snakeScreenshot'}/>
                    </div>
                    <div className="project-title">A Snake Game</div>
                    <div className="project-description">
                        A classic game built with JavaFX incorporating MVC design pattern.
                        Lessons on separation of concerns and data structures.
                    </div>
                    <div className='project-links'>
                        <a href='https://github.com/YonaMoreda/snake' target={'_blank'}>
                            View on GitHub <br/>
                            <img style={{borderRadius: "50%"}} src={githubLogo} alt={'github'}/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-screenshot">
                        <video autoPlay muted loop>
                            <source src={anneVideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="project-title">Architectural Portfolio</div>
                    <div className="project-description">
                        A portfolio website for architectural studio using three.js library.
                        Lessons learnt on setting up interactive 3D graphics on the web and
                        learning about the important aspects of a portfolio for a different industry.
                    </div>
                    <div className='project-links'>
                        <a href='https://github.com/YonaMoreda/snake' target={'_blank'}>
                            View website
                        </a>
                        <a href='https://github.com/YonaMoreda/snake' target={'_blank'}>
                            View on GitHub <br/>
                            <img style={{borderRadius: "50%"}} src={githubLogo} alt={'github'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Projects;