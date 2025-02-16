import '../stylesheets/Projects.css'
import snakeScreenshot from '../../public/projects-showcase/snake-game-demo.gif';
import anneVideo from '../../public/projects-showcase/anne-video.mp4';
import sudokuScreenshot from '../../public/projects-showcase/sudoku-solver.gif';
import raycastScreenshot from '../../public/projects-showcase/ray-casting-demo.gif';
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
                    <div className="project-title" style={{paddingTop: '25%'}}>Architectural Portfolio</div>
                    <div className="project-description">
                        A portfolio website for architectural studio using three.js library.
                        Lessons learnt on setting up interactive 3D graphics on the web and
                        learning about the important aspects of a portfolio for a different industry.
                    </div>
                    <div className='project-links'>
                        <a href='https://yonamoreda.github.io/anne-studio/' target={'_blank'}>
                            View website
                        </a>
                        <a href='https://github.com/YonaMoreda/anne-studio' target={'_blank'}>
                            View on GitHub <br/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-screenshot">
                        <img src={sudokuScreenshot} alt={'sudoku-solver-gif'} style={{width: '270px'}}/>
                    </div>
                    <div className="project-title">Sudoku Solver</div>
                    <div className="project-description">
                        A JavaFX app that implements DFS to solve sudoku puzzles.
                        Lessons on algorithms, data structures and ease
                        of use and visualization with MVC.
                    </div>
                    <div className='project-links'>
                        <a href='https://github.com/YonaMoreda/javafx-sudoku-solver' target={'_blank'}>
                            View on GitHub <br/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-screenshot">
                        <img src={raycastScreenshot} alt={'ray-cast-gif'} style={{width:'450px'}}/>
                    </div>
                    <div className="project-title" style={{paddingTop: '10%'}}>Ray casting (2.5D game)</div>
                    <div className="project-description" style={{}}>
                        A JavaFX app that recreates doom-style 2.5D rendering
                        using ray casting where a pure 2D plane creates an impression of 3D space.
                        Lessons learnt on ray casting techniques
                        used in early computer graphics.
                    </div>
                    <div className='project-links'>
                        <a href='https://github.com/YonaMoreda/JavaFX-raycasting' target={'_blank'}>
                            View on GitHub <br/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Projects;