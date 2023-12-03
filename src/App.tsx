import * as THREE from 'three'
import './App.css'

//Scene
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 6

//Grid helper
// const gridHelper = new THREE.GridHelper(30, 30)
// scene.add(gridHelper)
// const axesHelper = new THREE.AxesHelper(10)
// scene.add(axesHelper)

//Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64)

//Material
const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(
        'https://blog.playcanvas.com/assets/media/texture-earth.jpg'
    )
});

//https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg
//'https://blog.playcanvas.com/assets/media/texture-earth.jpg'

// const material = new THREE.MeshStandardMaterial( { color: "#00ff00" })

//Mesh
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

//Light
const pointLight = new THREE.PointLight(0xffffff, 300)
pointLight.position.set(0, 10, 10)
scene.add(pointLight)

//Renderer
const canvas = document.querySelector('#webgl')!
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
renderer.setAnimationLoop(animation);

function animation(time: DOMHighResTimeStamp) {
    pointLight.position.x = Math.sin(time / 5000) * 3;
    // pointLight.position.y = 5+Math.cos(time / 10000) * 3;

    // sphere.rotation.x = time / 200000;
    sphere.rotation.y = time / 30000;
    // sphere.rotation.z = time / 10000;

    renderer.render(scene, camera);

}

function App() {
    return (
        <>
        </>
    )
}

export default App
