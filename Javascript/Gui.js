var gui = new dat.GUI();

var planetsAndSun = gui.addFolder('Planets and Sun');

// Sun Button
var _sunBtn = {
  sunBtn: function () { }
};
var sunBtn = planetsAndSun.add(_sunBtn, 'sunBtn').name('Sun');

sunBtn.onChange(function () {
  camera.position.set(sunPosition.x, sunPosition.y, (sunRadius * 3));
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  controls.target = sun.position;
});

// Mercury Button
var _mercuryBtn = {
  mercuryBtn: function () { }
};
var mercuryBtn = planetsAndSun.add(_mercuryBtn, 'mercuryBtn').name('Mercury');

mercuryBtn.onChange(function () {
  camera.position.set(mercuryPosition.x, mercuryPosition.y, (mercuryRadius * 3));
  camera.lookAt(mercury.position);
  controls.target = mercury.position;
});

// Venus Button
var _venusBtn = {
  venusBtn: function () { }
};
var venusBtn = planetsAndSun.add(_venusBtn, 'venusBtn').name('Venus');

venusBtn.onChange(function () {
  camera.position.set(venusPosition.x, venusPosition.y, (venusRadius * 3));
  camera.lookAt(venus.position);
  controls.target = venus.position;
});

// Earth Button
var _earthBtn = {
  earthBtn: function () { }
};
var earthBtn = planetsAndSun.add(_earthBtn, 'earthBtn').name('Earth');

earthBtn.onChange(function () {
  camera.position.set(earthPosition.x, earthPosition.y, (earthRadius * 3));
  camera.lookAt(earth.position);
  controls.target = earth.position;
});

// Mars Button
var _marsBtn = {
  marsBtn: function () { }
};
var marsBtn = planetsAndSun.add(_marsBtn, 'marsBtn').name('Mars');

marsBtn.onChange(function () {
  camera.position.set(marsPosition.x, marsPosition.y, (marsRadius * 3));
  camera.lookAt(mars.position);
  controls.target = mars.position;
});

// Jupiter
var _jupiterBtn = {
  jupiterBtn: function () { }
};
var jupiterBtn = planetsAndSun.add(_jupiterBtn, 'jupiterBtn').name('Jupiter');

jupiterBtn.onChange(function () {
  camera.position.set(jupiterPosition.x, jupiterPosition.y, (jupiterRadius * 3));
  camera.lookAt(jupiter.position);
  controls.target = jupiter.position;
});

// Saturn
var _saturnBtn = {
  saturnBtn: function () { }
};
var saturnBtn = planetsAndSun.add(_saturnBtn, 'saturnBtn').name('Saturn');

saturnBtn.onChange(function () {
  camera.position.set(saturnPosition.x, saturnPosition.y, (saturnRadius * 3));
  camera.lookAt(saturn.position);
  controls.target = saturn.position;
});

// Uranus
var _uranusBtn = {
  uranusBtn: function () { }
};
var uranusBtn = planetsAndSun.add(_uranusBtn, 'uranusBtn').name('Uranus');

uranusBtn.onChange(function () {
  camera.position.set(uranusPosition.x, uranusPosition.y, (uranusRadius * 3));
  camera.lookAt(uranus.position);
  controls.target = uranus.position;
});

// Neptune
var _neptuneBtn = {
  neptuneBtn: function () { }
};
var neptuneBtn = planetsAndSun.add(_neptuneBtn, 'neptuneBtn').name('Neptune');

neptuneBtn.onChange(function () {
  camera.position.set(neptunePosition.x, neptunePosition.y, (neptuneRadius * 3));
  camera.lookAt(neptune.position);
  controls.target = neptune.position;
});

// Pluto
var _plutoBtn = {
  plutoBtn: function () { }
};
var plutoBtn = planetsAndSun.add(_plutoBtn, 'plutoBtn').name('Pluto');

plutoBtn.onChange(function () {
  camera.position.set(plutoPosition.x, plutoPosition.y, (plutoRadius * 3));
  camera.lookAt(pluto.position);
  controls.target = pluto.position;
});