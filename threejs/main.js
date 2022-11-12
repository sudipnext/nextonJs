import "./style.css";

import * as THREE from "three";
//to use our mouse functions we can use orbit controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
//first argument field of view, aspect ratio, view frustum which objects are visible range
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//inside renderer we need to specify what to render and which dom element to render
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
//adding light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
//light for whole scene
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);
//helper for lights and grids
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);
//adding controls
const controls = new OrbitControls(camera, renderer.domElement);
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);
const spaceTexture = new THREE.TextureLoader().load("2.jpg");
scene.background = spaceTexture

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  //to make sure the changes are reflcted
  controls.update();
  renderer.render(scene, camera);
}
animate();
//myavatar
const spTexture = new THREE.TextureLoader().load('sudip.jpg')
 
const sp = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map: spTexture})
)
scene.add(sp)