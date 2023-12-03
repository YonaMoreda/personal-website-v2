import * as THREE from 'three'
import './App.css'
import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls.js";

//Scene
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 6
camera.lookAt(0, 0, 0)

const clock = new THREE.Clock();

//Grid helper
// const gridHelper = new THREE.GridHelper(30, 30)
// scene.add(gridHelper)
// const axesHelper = new THREE.AxesHelper(10)
// scene.add(axesHelper)

//Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64)

//Material
const material = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('src/img/8k_earth_nightmap.jpg'),
    normalMap: new THREE.TextureLoader().load('src/img/8k_earth_normal_map.jpg'),
    specularMap: new THREE.TextureLoader().load('src/img/8k_earth_specular_map.jpg'),
    // bumpMap: new THREE.TextureLoader().load('src/img/8k_earth_normal_map.jpg'),
    // bumpScale: 0.5,
    // specularMap: new THREE.TextureLoader().load('https://shadedrelief.com/natural3/ne3_data/16200/water_16k.png'),
});

//https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg
//'https://blog.playcanvas.com/assets/media/texture-earth.jpg'

//Mesh
const earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)

//Clouds
const cloudGeometry = new THREE.SphereGeometry(3.1, 64, 64)
const cloudMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('src/img/8k_earth_clouds.jpg'),
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
const canvas = document.querySelector('#webgl')!
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)
renderer.setAnimationLoop(animation);
window.addEventListener('resize', onWindowResize);

//Controls
const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.01;
controls.movementSpeed = 0;

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.01;
// controls.screenSpacePanning = false;

function animation(time: DOMHighResTimeStamp) {
    pointLight.position.x = Math.sin(time / 5000) * 3;
    earthMesh.rotation.y = time / 50000;
    cloudMesh.rotation.y = time / 50000;
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
}

function App() {
    return (
        <>
        </>
    )
}

export default App
