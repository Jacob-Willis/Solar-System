var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


animate();


// This is the animate function, called every frame to animate each object
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

//this function is called when the window is resized
var onWindowResize = function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

// This function is called whenever the mouse is clicked
function onDocumentMouseDown(event) {
  console.log("Mouse Clicked");
}

window.addEventListener('resize', onWindowResize, false);
document.addEventListener('mousedown', onDocumentMouseDown, false);
//Orbit contorls
controls = new THREE.OrbitControls(camera, renderer.domElement);
