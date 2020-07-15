var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 5906292480);
var cameraPos0 = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
var cameraPos1 = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);

var minSegments = 4;
var maxSegments = 32;

// distance when objects need to be in before they start increasing in resolution
var maxRenderRadius = 3000000;
var minRenderRadius = 1185;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var planetsAndSunGroup = new THREE.Group();

// Adds the sun
sun = new Sun(minSegments);
planetsAndSunGroup.add(sun);
//sun.scale(2, 1, 1);

// Adds Mercury
mercury = new Mercury(minSegments);
planetsAndSunGroup.add(mercury);

// Adds Venus
venus = new Venus(minSegments);
planetsAndSunGroup.add(venus);

// Adds Earth
earth = new Earth(minSegments);
planetsAndSunGroup.add(earth);

// Adds Mars
mars = new Mars(minSegments);
planetsAndSunGroup.add(mars);

// Adds Jupiter
jupiter = new Jupiter(minSegments);
planetsAndSunGroup.add(jupiter);

// Adds Saturn
saturn = new Saturn(minSegments);
planetsAndSunGroup.add(saturn);

// Adds Uranus
uranus = new Uranus(minSegments);
planetsAndSunGroup.add(uranus);

// Adds Neptune
neptune = new Neptune(minSegments);
planetsAndSunGroup.add(neptune);

// Adds Pluto
pluto = new Pluto(minSegments);
planetsAndSunGroup.add(pluto);

planetsAndSunGroup.name = "planetsAndSun";
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

camera.position.set(sun.position.x, sun.position.y, (sun.position.z + sunRadius * 2.5 * sun.scale.z));
camera.lookAt(sunPosition);

animate();


// This is the animate function, called every frame to animate each object
function animate() {
  requestAnimationFrame(animate);
  update();
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function update() {
  loopThroughScene();
}

function loopThroughScene() {
  cameraPos1.set(camera.position.x, camera.position.y, camera.position.z);
  if ((cameraPos0.x == cameraPos1.x) && (cameraPos0.y == cameraPos1.y) && (cameraPos0.z == cameraPos1.z)) {
  } else {
    cameraPos0.set(cameraPos1.x, cameraPos1.y, cameraPos1.z);
    for (var i = 0; i < scene.children.length; i++) {
      if (scene.children[i].children.length > 0) {
        var child = scene.children[i];
        for (var j = 0; j < child.children.length; j++) {
          var miniChild = child.children[j];
          var distance = calculateDistance(camera, miniChild);
          if (distance <= maxRenderRadius && distance >= minRenderRadius) {
            console.log("Object: " + miniChild.name);
            console.log("Radius: " + miniChild.geometry.parameters.radius);
            console.log("Distance from camera: " + distance);
            const r = miniChild.geometry.parameters.radius;
            const s = map(distance, minRenderRadius, maxRenderRadius, maxSegments, minSegments);
            generateGeometry(miniChild, r, s);
          }
        }
      }
    }
    console.log("Camera moved");
  }
}

function map(num, originalMin, originalMax, newMin, newMax) {

  return (((num - originalMin) / (originalMax - originalMin)) * (newMax - newMin)) + newMin;
}

function calculateDistance(obj1, obj2) {
  // d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2)

  var xSquared = Math.pow((obj1.position.x - obj2.position.x), 2);
  var ySquared = Math.pow((obj1.position.y - obj2.position.y), 2);
  var zSquared = Math.pow((obj1.position.z - obj2.position.z), 2);

  var distance = Math.sqrt(xSquared + ySquared + zSquared);
  return distance;
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
//document.addEventListener('mousedown', onDocumentMouseDown, false);

//Orbit contorls
controls = new THREE.OrbitControls(camera, renderer.domElement);