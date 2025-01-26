import '../stylesheets/Timeline.css'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import NavBar from "./NavBar";


//Scene
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 6
camera.lookAt(0, 0, 0)

const clock = new THREE.Clock();

//Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64)

//Material
const material = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('earth-textures/8k-earth-daymap-annotated.jpg'),
    normalMap: new THREE.TextureLoader().load('earth-textures/2k_earth_normal_map.tif'),
    specularMap: new THREE.TextureLoader().load('earth-textures/2k_earth_specular_map.tif')
});

//Mesh
const earthMesh = new THREE.Mesh(geometry, material)
earthMesh.rotation.y = -2.1
earthMesh.rotation.x = .5
scene.add(earthMesh)

//Clouds
const cloudGeometry = new THREE.SphereGeometry(3.01, 64, 64)
const cloudMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('earth-textures/2k_earth_clouds.jpg'),
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
})
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
scene.add(cloudMesh)

//Light
const pointLight = new THREE.PointLight(0xffffff, 300)
pointLight.position.set(0, 10, 10)
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

//Renderer
const canvas = document.querySelector('#webgl-journey')!
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)
renderer.setAnimationLoop(animation);
window.addEventListener('resize', onWindowResize);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.01;


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animation(time: DOMHighResTimeStamp) {
    pointLight.position.x = Math.sin(time / 5000) * 3;
    earthMesh.rotation.y -= .0002
    cloudMesh.rotation.y -= .0002
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
}

function CustomTimeline() {
    return (
        <div>
            <NavBar/>
            <div style={{position: "absolute", top: "10%", left: "5%", width: "25%"}}>
                <h1>
                    My Journey
                </h1>
                _____
                <p>My Journey began in Addis Ababa, the Capital of Ethiopia, where I was born and raised till I moved to
                    Bangladesh as a teenager and lived there for 3 years alongside my family.</p>
                <p>I attended the American International School of Dhaka and graduated in 2017. After graduating high
                    school, I then moved to the Netherlands to pursue my studies in Computer Science.</p>
            </div>
            <div style={{position: "absolute", top: "15%", right: "5%", width: "40%"}}>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            April 8, 1999 - Birth
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4 style={{marginTop: "-1px"}}>Addis Ababa, Ethiopia</h4>
                            <p><i>Where it all began</i></p>
                            <p>I was born in Addis Ababa on the 8<sup>th</sup> of April, 1999 and grew up for most of my
                                life in Addis Ababa. </p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            August 21, 2014
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4 style={{marginTop: "-1px"}}>Dhaka, Bangladesh</h4>
                            <p><i>Expanding horizons</i></p>
                            <p>This was the first time I had the chance to go abroad and expand my horizons. I was able
                                to experience a new culture and meet new people alongside my family. I attended the
                                American International School of Dhaka and graduated in 2017 with IB Diploma.
                            </p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            August 21, 2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4 style={{marginTop: "-1px"}}>The Netherlands / Europe</h4>
                            <p><i>The adventure continues ...</i></p>
                            <p>After Bangladesh, I moved to the Netherlands to pursue my higher education in University
                                of Groningen. I attained my Bachelors in Computer Science in 3 years with an 8.1 GPA. Then I began
                                working in Rabobank as a back-end Software Engineer since December 2020.
                            </p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default CustomTimeline;