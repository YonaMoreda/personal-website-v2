import * as THREE from 'three'
import './App.css'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import SplashText from "./components/SplashText";
import NavBar from "./components/NavBar";
import ContactBar from "./components/ContactBar";
import {Group} from "three/src/Three.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import Contact from "./components/Contact.tsx";

let mixer: THREE.AnimationMixer;
let astronautModel: Group;

//Scene
const scene = new THREE.Scene()
scene.background = new THREE.CubeTextureLoader()
    .setPath('textures/cubeMaps/')
    .load([]);

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 6
camera.lookAt(0, 0, 0)

const clockForAstronaut = new THREE.Clock();
const clockForControls = new THREE.Clock();

//Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64)

//Material
const material = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('earth-textures/8k-earth-nightmap.jpg'),
    normalMap: new THREE.TextureLoader().load('earth-textures/8k-earth-normal-map.tif'),
    specularMap: new THREE.TextureLoader().load('earth-textures/8k-earth-specular-map.tif')
});

//Mesh
const earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)

//Clouds
const cloudGeometry = new THREE.SphereGeometry(3.01, 64, 64)
const cloudMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('earth-textures/8k-earth-clouds.jpg'),
    transparent: true,
    opacity: 0.5,
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
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.001;
controls.screenSpacePanning = false;
controls.enableZoom = false;


const gltfLoader = new GLTFLoader();
gltfLoader.load("./astronaut/scene.gltf", (gltfScene) => {
    astronautModel = gltfScene.scene;
    astronautModel.position.set(1.5, 0, 4);
    astronautModel.scale.set(.5, .5, .5);
    astronautModel.rotation.y = -Math.PI / 4;
    mixer = new THREE.AnimationMixer(astronautModel);
    mixer.clipAction(gltfScene.animations[3]).play();
    scene.add(astronautModel);
})

function animation(time: DOMHighResTimeStamp) {
    pointLight.position.x = Math.sin(time / 5000) * 3;
    earthMesh.rotation.y = time / 50000;
    cloudMesh.rotation.y = time / 50000;

    if (mixer) {
        astronautModel.position.y = 2 * Math.sin(time / 4000)
        astronautModel.rotation.y = 2 * Math.sin(time / 4000)
        astronautModel.rotation.z = 4 * Math.sin(time / 9000)
        mixer.update(clockForAstronaut.getDelta());
    }
    controls.update(clockForControls.getDelta());
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function App() {
    return (
        <>
            <NavBar/>
            <SplashText/>
            {/*or*/}
            <Contact />
            <ContactBar/>
        </>
    )
}

export default App
