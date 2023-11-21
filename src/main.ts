import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// @ts-ignore
import vertexShader from "./shaders/vertex.frag";
// @ts-ignore
import fragmentShader from "./shaders/fragment.frag";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(16);
scene.add(axesHelper);

const light = new THREE.AmbientLight(0xfff, 1);
scene.add(light);

const uniformData = {
  u_time: {
    type: "f",
    value: 0,
  },
};

const geometry = new THREE.BoxGeometry(10, 10, 10, 20, 20, 20);

const material = new THREE.ShaderMaterial({
  // wireframe: true,
  uniforms: uniformData,
  vertexShader,
  fragmentShader,
});

const obj = new THREE.Mesh(geometry, material);

scene.add(obj);

const animate = () => {
  uniformData.u_time.value += 0.1;
  requestAnimationFrame(animate);

  // obj.rotation.x += 0.01;
  // obj.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// Start animation
animate();
