var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 5906292480);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var planetsAndSunGroup = new THREE.Group();

// Adds the sun
sun = new Sun(64);
planetsAndSunGroup.add(sun);

// Adds Mercury
mercury = new Mercury(64);
planetsAndSunGroup.add(mercury);

// Adds Venus
venus = new Venus(64);
planetsAndSunGroup.add(venus);

// Adds Earth
earth = new Earth(64);
planetsAndSunGroup.add(earth);

// Adds Mars
mars = new Mars(64);
planetsAndSunGroup.add(mars);

// Adds Jupiter
jupiter = new Jupiter(64);
planetsAndSunGroup.add(jupiter);

// Adds Saturn
saturn = new Saturn(64);
planetsAndSunGroup.add(saturn);

// Adds Uranus
uranus = new Uranus(64);
planetsAndSunGroup.add(uranus);

// Adds Neptune
neptune = new Neptune(64);
planetsAndSunGroup.add(neptune);

// Adds Pluto
pluto = new Pluto(64);
planetsAndSunGroup.add(pluto);

scene.add(planetsAndSunGroup);

resizeOriginalScaling();

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var points = [];
points.push(sunPosition);
points.push(plutoPosition);

var geometry = new THREE.BufferGeometry().setFromPoints(points);
var line = new THREE.Line(geometry, material);
scene.add(line);

var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

camera.position.set(sunPosition.x, sunPosition.y, (sunRadius * 3));
camera.lookAt(sunPosition);

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
