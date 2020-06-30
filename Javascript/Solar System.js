var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.000001, 100000000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var gui = new dat.GUI();

// Sun Button
var _sunBtn = {
  sunBtn: function () { }
};
var sunBtn = gui.add(_sunBtn, 'sunBtn').name('Sun');

sunBtn.onChange(function () {
  camera.position.set(0, 0, (695842 * 3));
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  controls.target = sun.position;
});

// Mercury Button
var _mercuryBtn = {
  mercuryBtn: function () { }
};
var mercuryBtn = gui.add(_mercuryBtn, 'mercuryBtn').name('Mercury');

mercuryBtn.onChange(function () {
  camera.position.set(57910000, 0, (2440 * 3));
  camera.lookAt(mercury.position);
  controls.target = mercury.position;
});


// Venus Button
var _venusBtn = {
  venusBtn: function () { }
};
var venusBtn = gui.add(_venusBtn, 'venusBtn').name('Venus');

venusBtn.onChange(function () {
  camera.position.set(108210000, 0, (6052 * 3));
  camera.lookAt(venus.position);
  controls.target = venus.position;
});


// Earth Button
var _earthBtn = {
  earthBtn: function () { }
};
var earthBtn = gui.add(_earthBtn, 'earthBtn').name('Earth');

earthBtn.onChange(function () {
  camera.position.set(149597871, 0, (6371 * 3));
  camera.lookAt(earth.position);
  controls.target = earth.position;
});

// Mars Button
var _marsBtn = {
  marsBtn: function () { }
};
var marsBtn = gui.add(_marsBtn, 'marsBtn').name('Mars');

marsBtn.onChange(function () {
  camera.position.set(227987155, 0, (3390 * 3));
  camera.lookAt(mars.position);
  controls.target = mars.position;
});

// Jupiter
var _jupiterBtn = {
  jupiterBtn: function () { }
};
var jupiterBtn = gui.add(_jupiterBtn, 'jupiterBtn').name('Jupiter');

jupiterBtn.onChange(function () {
  camera.position.set(778507319, 0, (69911 * 3));
  camera.lookAt(jupiter.position);
  controls.target = jupiter.position;
});

// Saturn
var _saturnBtn = {
  saturnBtn: function () { }
};
var saturnBtn = gui.add(_saturnBtn, 'saturnBtn').name('Saturn');

saturnBtn.onChange(function () {
  camera.position.set(1433400000, 0, (58232 * 3));
  camera.lookAt(saturn.position);
  controls.target = saturn.position;
});

// Uranus
var _uranusBtn = {
  uranusBtn: function () { }
};
var uranusBtn = gui.add(_uranusBtn, 'uranusBtn').name('Uranus');

uranusBtn.onChange(function () {
  camera.position.set(2876800000, 0, (25362 * 3));
  camera.lookAt(uranus.position);
  controls.target = uranus.position;
});

// Neptune
var _neptuneBtn = {
  neptuneBtn: function () { }
};
var neptuneBtn = gui.add(_neptuneBtn, 'neptuneBtn').name('Neptune');

neptuneBtn.onChange(function () {
  camera.position.set(4502900000, 0, (24622 * 3));
  camera.lookAt(neptune.position);
  controls.target = neptune.position;
});

// Pluto
var _plutoBtn = {
  plutoBtn: function () { }
};
var plutoBtn = gui.add(_plutoBtn, 'plutoBtn').name('Pluto');

plutoBtn.onChange(function () {
  camera.position.set(5906292480, 0, (1185 * 3));
  camera.lookAt(pluto.position);
  controls.target = pluto.position;
});

// 1 astronomical unit = 149597871 kilometers
//var auUnit = 149597871;

// Adds the sun
sun = new Sun(695842, 64);
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

// Adds Earth
earth = new Earth(6371, 64);
earth.position.x = (149597871);
earth.position.y = 0;
earth.position.z = 0;
console.log(earth);
scene.add(earth);

// Adds Mars
mars = new Mars(3390, 64);
mars.position.x = (227987155);
mars.position.y = 0;
mars.position.z = 0;
console.log(mars);
scene.add(mars);

// Adds Jupiter
jupiter = new Jupiter(69911, 64);
jupiter.position.x = (778507319);
jupiter.position.y = 0;
jupiter.position.z = 0;
console.log(jupiter);
scene.add(jupiter);

// Adds Saturn
saturn = new Saturn(58232, 64);
saturn.position.x = (1433400000);
saturn.position.y = 0;
saturn.position.z = 0;
console.log(saturn);
scene.add(saturn);

// Adds Uranus
uranus = new Uranus(25362, 64);
uranus.position.x = (2876800000);
uranus.position.y = 0;
uranus.position.z = 0;
console.log(uranus);
scene.add(uranus);

// Adds Neptune
neptune = new Neptune(24622, 64);
neptune.position.x = (4502900000);
neptune.position.y = 0;
neptune.position.z = 0;
console.log(neptune);
scene.add(neptune);

// Adds Pluto
pluto = new Pluto(1185, 64);
pluto.position.x = (5906292480);
pluto.position.y = 0;
pluto.position.z = 0;
console.log(pluto);
scene.add(pluto);

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var points = [];
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(5906292480, 0, 0));

var geometry = new THREE.BufferGeometry().setFromPoints(points);
var line = new THREE.Line(geometry, material);
scene.add(line);

var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

camera.position.set(0, 0, (695842 * 3));
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
