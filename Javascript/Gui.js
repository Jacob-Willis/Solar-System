var gui = new dat.GUI();

var planetsAndSunFolder = gui.addFolder('Planets and Sun');
var scalingFolder = gui.addFolder('Scaling');

// Sun Button
var _sunBtn = {
  sunBtn: function () { }
};
var sunBtn = planetsAndSunFolder.add(_sunBtn, 'sunBtn').name('Sun');

sunBtn.onChange(function () {
  camera.position.set(sun.position.x, sun.position.y, (sun.position.z + sunRadius * 2.5 * sun.scale.z));
  camera.lookAt(sun.position);
  controls.target = new THREE.Vector3(sun.position.x, sun.position.y, sun.position.z);
});

// Mercury Button
var _mercuryBtn = {
  mercuryBtn: function () { }
};
var mercuryBtn = planetsAndSunFolder.add(_mercuryBtn, 'mercuryBtn').name('Mercury');

mercuryBtn.onChange(function () {
  camera.position.set(mercury.position.x, mercury.position.y, (mercury.position.z + mercuryRadius * 2.5 * mercury.scale.z));
  camera.lookAt(mercury.position);
  controls.target = new THREE.Vector3(mercury.position.x, mercury.position.y, mercury.position.z);
});

// Venus Button
var _venusBtn = {
  venusBtn: function () { }
};
var venusBtn = planetsAndSunFolder.add(_venusBtn, 'venusBtn').name('Venus');

venusBtn.onChange(function () {
  camera.position.set(venus.position.x, venus.position.y, (venus.position.z + venusRadius * 2.5 * venus.scale.z));
  camera.lookAt(venus.position);
  controls.target = new THREE.Vector3(venus.position.x, venus.position.y, venus.position.z);
});

// Earth Button
var _earthBtn = {
  earthBtn: function () { }
};
var earthBtn = planetsAndSunFolder.add(_earthBtn, 'earthBtn').name('Earth');

earthBtn.onChange(function () {
  camera.position.set(earth.position.x, earth.position.y, (earth.position.z + earthRadius * 2.5 * earth.scale.z));
  camera.lookAt(earth.position);
  controls.target = new THREE.Vector3(earth.position.x, earth.position.y, earth.position.z);
});

// Mars Button
var _marsBtn = {
  marsBtn: function () { }
};
var marsBtn = planetsAndSunFolder.add(_marsBtn, 'marsBtn').name('Mars');

marsBtn.onChange(function () {
  camera.position.set(mars.position.x, mars.position.y, (mars.position.z + marsRadius * 2.5 * mars.scale.z));
  camera.lookAt(mars.position);
  controls.target = new THREE.Vector3(mars.position.x, mars.position.y, mars.position.z);
});

// Jupiter
var _jupiterBtn = {
  jupiterBtn: function () { }
};
var jupiterBtn = planetsAndSunFolder.add(_jupiterBtn, 'jupiterBtn').name('Jupiter');

jupiterBtn.onChange(function () {
  camera.position.set(jupiter.position.x, jupiter.position.y, (jupiter.position.z + jupiterRadius * 2.5 * jupiter.scale.z));
  camera.lookAt(saturn.position);
  controls.target = new THREE.Vector3(saturn.position.x, saturn.position.y, saturn.position.z);
});

// Saturn
var _saturnBtn = {
  saturnBtn: function () { }
};
var saturnBtn = planetsAndSunFolder.add(_saturnBtn, 'saturnBtn').name('Saturn');

saturnBtn.onChange(function () {
  camera.position.set(saturn.position.x, saturn.position.y, (saturn.position.z + saturnRadius * 2.5 * saturn.scale.z));
  camera.lookAt(saturn.position);
  controls.target = new THREE.Vector3(saturn.position.x, saturn.position.y, saturn.position.z);
});

// Uranus
var _uranusBtn = {
  uranusBtn: function () { }
};
var uranusBtn = planetsAndSunFolder.add(_uranusBtn, 'uranusBtn').name('Uranus');

uranusBtn.onChange(function () {
  camera.position.set(uranus.position.x, uranus.position.y, (uranus.position.z + uranusRadius * 2.5 * uranus.scale.z));
  camera.lookAt(uranus.position);
  controls.target = new THREE.Vector3(uranus.position.x, uranus.position.y, uranus.position.z);
});

// Neptune
var _neptuneBtn = {
  neptuneBtn: function () { }
};
var neptuneBtn = planetsAndSunFolder.add(_neptuneBtn, 'neptuneBtn').name('Neptune');

neptuneBtn.onChange(function () {
  camera.position.set(neptune.position.x, neptune.position.y, (neptune.position.z + neptuneRadius * 2.5 * neptune.scale.z));
  camera.lookAt(neptune.position);
  controls.target = new THREE.Vector3(neptune.position.x, neptune.position.y, neptune.position.z);
});

// Pluto
var _plutoBtn = {
  plutoBtn: function () { }
};
var plutoBtn = planetsAndSunFolder.add(_plutoBtn, 'plutoBtn').name('Pluto');

plutoBtn.onChange(function () {
  camera.position.set(pluto.position.x, pluto.position.y, (pluto.position.z + plutoRadius * 2.5 * pluto.scale.z));
  camera.lookAt(pluto.position);
  controls.target = new THREE.Vector3(pluto.position.x, pluto.position.y, pluto.position.z);
});

// Original Scaling
var _originalScaling = {
  originalScalingBtn: function () { }
};
var originalScalingBtn = scalingFolder.add(_originalScaling, 'originalScalingBtn').name('Original Scaling');

originalScalingBtn.onChange(function () {
  resizeOriginalScaling();
});

// Scale 100% up
var _scaleUp100 = {
  scaleUp100Btn: function () { }
};
var scaleUp100Btn = scalingFolder.add(_scaleUp100, 'scaleUp100Btn').name('Inc. Scale');

scaleUp100Btn.onChange(function () {
  scaleAllUp(2);
});

// Scale 100% up excluding sun
var _scaleUp100ExcludeSun = {
  _scaleUp100ExcludeSunBtn: function () { }
};
var scaleUp100ExcludeSunBtn = scalingFolder.add(_scaleUp100ExcludeSun, '_scaleUp100ExcludeSunBtn').name('Inc Scale - the Sun');

scaleUp100ExcludeSunBtn.onChange(function () {
  scaleAllUpExceptSun(2);
});

// Scale X distance smaller
var _scaleDownX = {
  scaleDownXBtn: function () { }
};
var scaleDownXBtn = scalingFolder.add(_scaleDownX, 'scaleDownXBtn').name('Dec. Plnt Dist.');

scaleDownXBtn.onChange(function () {
  scaleDownXDistanceByPercent(20);
});

// Scale 100% down
var _scaleDown100 = {
  scaleDown100Btn: function () { }
};
var scaleDown100Btn = scalingFolder.add(_scaleDown100, 'scaleDown100Btn').name('Dec. Size');

scaleDown100Btn.onChange(function () {
  scaleAllDown(2);
});

// Scale 100% up excluding sun
var _scaleDown100ExcludeSun = {
  scaleDown100ExcludeSun: function () { }
};
var scaleDown100ExcludeSun = scalingFolder.add(_scaleDown100ExcludeSun, 'scaleDown100ExcludeSun').name('Dec Scale - the Sun');

scaleDown100ExcludeSun.onChange(function () {
  scaleAllDownExceptSun(2);
});

// Scale X distance smaller
var _scaleUpX = {
  scaleUpXBtn: function () { }
};
var scaleUpXBtn = scalingFolder.add(_scaleUpX, 'scaleUpXBtn').name('Incrs Plnt Dist.');

scaleUpXBtn.onChange(function () {
  scaleUpXDistanceByPercent(20);
});