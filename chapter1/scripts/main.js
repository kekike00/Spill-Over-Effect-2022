import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; //move around with mouse

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);
camera.position.setX(0);

//lights
const ambientLight = new THREE.AmbientLight(0xff0000, 0.8);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(ambientLight, gridHelper);

// controls
const controls = new OrbitControls(camera, renderer.domElement); //listen to the dom elememt of mouse and pass to the camera movement
controls.minDistance = 1;
controls.maxDistance = 1000;

// prepare geometry
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const boxEdges = new THREE.EdgesGeometry(boxGeo); // or WireframeGeometry( geometry )
var boxLines = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 1 });

const planeGeo = new THREE.PlaneGeometry(9.5, 9.5, 9.5);

const textureLoader = new THREE.TextureLoader();
const textureArray = [];
const textureCount = 46;

// load all textures and have ready in array
for (let i = 1; i <= textureCount; i++) {
  const texture = textureLoader.load(
    "/Spill-Over-Effect-2022/images/jz/image" + i + ".jpg"
  );
  textureArray.push(texture);
}

const instanceCount = 55;

// generate instances
for (let i = 0; i < instanceCount; i++) {
  const xx = THREE.MathUtils.randFloatSpread(100);
  const yy = THREE.MathUtils.randFloatSpread(100);
  const zz = THREE.MathUtils.randFloatSpread(100);

  //
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: textureArray[THREE.MathUtils.randInt(0, textureCount - 1)],
  }); // color: 0xe78be7  map:jzImg
  var randomPlane = new THREE.Mesh(planeGeo, planeMaterial);
  randomPlane.position.set(xx, yy - 5, zz);
  randomPlane.rotation.x = 90;

  //
  var boxWireframe = new THREE.LineSegments(boxEdges, boxLines);
  boxWireframe.position.set(xx, yy, zz);
  boxWireframe.rotation.x = 50;

  scene.add(boxWireframe, randomPlane);
}

//---------------------------------》 mouse move tracker
var mouse = { x: 0, y: 0 };
//make a mouse circle
var mouseGeometry = new THREE.SphereGeometry(0.5, 50, 70);
var mouseMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
var mouseMesh = new THREE.Mesh(mouseGeometry, mouseMaterial);
mouseMesh.position.z = -5;
scene.add(mouseMesh);

// When the mouse moves, call the given function
document.addEventListener("mousemove", onMouseMove, false);

// Follows the mouse event
function onMouseMove(event) {
  // Update the mouse variable
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Make the sphere follow the mouse
  var vector = new THREE.Vector3(mouse.x, mouse.y, 5);
  vector.unproject(camera);
  var dir = vector.sub(camera.position).normalize();
  var distance = -camera.position.z / dir.z;
  var pos = camera.position.clone().add(dir.multiplyScalar(distance));

  mouseMesh.position.copy(pos); // Make the sphere follow the mouse
}

//---------------------------------》load image as box
var jzboxTexture = textureLoader.load("/Spill-Over-Effect-2022/images/jiaozhuo2.png");
var jzboxGeometry = new THREE.BoxBufferGeometry(250, 250, 250);
var jzboxMaterial = new THREE.MeshBasicMaterial({ map: jzboxTexture });

var jzboxfloor = new THREE.Mesh(jzboxGeometry, jzboxMaterial);
// floor.position.set(10,10,10);
scene.add(jzboxfloor);

//---------------------------------》load image as floor
var jzTexture = textureLoader.load("/Spill-Over-Effect-2022/images/jiaozhuo.png");
const jzGeometry = new THREE.PlaneGeometry(50, 100);
const jzMaterial = new THREE.MeshBasicMaterial({
  map: jzTexture,
  side: THREE.DoubleSide,
});
const jzPlane = new THREE.Mesh(jzGeometry, jzMaterial);
jzPlane.rotation.x = -Math.PI / 2;
jzPlane.position.set(-60, 0, -40);
scene.add(jzPlane);

//----------------> music
// create an AudioListener and add it to the camera
const bgM = new THREE.AudioListener();
camera.add(bgM);

// create a global audio source
const sound = new THREE.Audio(bgM);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load("/Spill-Over-Effect-2022/sounds/rain.mp3", function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.5);
  sound.play();
});

// Rendering function
function render() {
  renderer.render(scene, camera);
}

// animate
function animate() {
  //
  // const t = document.body.getBoundingClientRect().top;
  // camera.position.z = 30 + t * -0.01;
  // camera.position.x = t * -0.0002;
  // camera.rotation.y = t * -0.0002;

  //
  jzboxfloor.rotation.y += 0.0005;
  jzboxfloor.rotation.x += 0.0;
  jzboxfloor.rotation.z += 0.0;

  controls.update();
  render();

  requestAnimationFrame(animate);
}

animate();
