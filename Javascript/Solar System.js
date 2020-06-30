var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.000001, 100000000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var gui = new dat.GUI();

var _sunBtn = {
  sunBtn: function () { }
};
var sunBtn = gui.add(_sunBtn, 'sunBtn').name('Sun');

sunBtn.onChange(function () {
  camera.position.set(0, 0, (auUnit * 3));
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  controls.target = sun.position;
});

var _mercuryBtn = {
  mercuryBtn: function () { }
};
var mercuryBtn = gui.add(_mercuryBtn, 'mercuryBtn').name('Mercury');

mercuryBtn.onChange(function () {
  camera.position.set(57910000, 0, (2440 * 3));
  camera.lookAt(mercury.position);
  controls.target = mercury.position;
});

var _venusBtn = {
  venusBtn: function () { }
};
var venusBtn = gui.add(_venusBtn, 'venusBtn').name('Venus');

venusBtn.onChange(function () {
  camera.position.set(108210000, 0, (6052 * 3));
  camera.lookAt(venus.position);
  controls.target = venus.position;
});

// 1 astronomical unit = 149597871 kilometers
// 1 au is the radius of the sun for this simulation
//var auUnit = 149597871;

var auUnit = 695842;
//var auUnit = 64;

// Adds the sun
sun = new Sun(auUnit, 64);
sun.position.x = 0;
sun.position.y = 0;
sun.position.z = 0;
console.log(sun);
scene.add(sun);

// Adds Mercury
mercury = new Mercury(2440, 64);
mercury.position.x = (57910000);
mercury.position.y = 0;
mercury.position.z = 0;
console.log(mercury);
scene.add(mercury);

// Adds Venus
venus = new Venus(6052, 64);
venus.position.x = (108210000);
venus.position.y = 0;
venus.position.z = 0;
console.log(venus);
scene.add(venus);

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var points = [];
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(75000000, 0, 0));

var geometry = new THREE.BufferGeometry().setFromPoints(points);
var line = new THREE.Line(geometry, material);
scene.add(line);

var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

camera.position.set(0, 0, (auUnit * 3));
camera.lookAt(new THREE.Vector3(0, 0, 0));

animate();


// This is the animate function, called every frame to animate each object
function animate() {
  requestAnimationFrame(animate);

  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

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
