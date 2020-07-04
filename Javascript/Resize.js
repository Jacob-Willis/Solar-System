// 1 astronomical unit = 149597871 kilometers
//var auUnit = 149597871;

var scaleInAmount = 0;
var scaleMax = 15;

var scaleUpAmount = 0;
var scaleUpMax = 5;

var sunRadius = 695842;
var sunPosition = new THREE.Vector3(0, 0, 0);

var mercuryRadius = 2440;
var mercuryPosition = new THREE.Vector3(57910000, 0, 0);

var venusRadius = 6052;
var venusPosition = new THREE.Vector3(108210000, 0, 0);

var earthRadius = 6371;
var earthPosition = new THREE.Vector3(149597871, 0, 0);

var marsRadius = 3390;
var marsPosition = new THREE.Vector3(227987155, 0, 0);

var jupiterRadius = 69911;
var jupiterPosition = new THREE.Vector3(778507319, 0, 0);

var saturnRadius = 58232;
var saturnPosition = new THREE.Vector3(1433400000, 0, 0);

var uranusRadius = 25362;
var uranusPosition = new THREE.Vector3(2876800000, 0, 0);

var neptuneRadius = 24622;
var neptunePosition = new THREE.Vector3(4502900000, 0, 0);

var plutoRadius = 1185;
var plutoPosition = new THREE.Vector3(5906292480, 0, 0);

function resizeOriginalScaling() {
	// sun
	sun.position.set(sunPosition.x, sunPosition.y, sunPosition.z);
	sun.scale.set(1, 1, 1);

	// mercury
	mercury.position.set(mercuryPosition.x, mercuryPosition.y, mercuryPosition.z);
	mercury.scale.set(1, 1, 1);

	// venus
	venus.position.set(venusPosition.x, venusPosition.y, venusPosition.z);
	venus.scale.set(1, 1, 1);

	// earth
	earth.position.set(earthPosition.x, earthPosition.y, earthPosition.z);
	earth.scale.set(1, 1, 1);

	// mars
	mars.position.set(marsPosition.x, marsPosition.y, marsPosition.z);
	mars.scale.set(1, 1, 1);

	// jupiter
	jupiter.position.set(jupiterPosition.x, jupiterPosition.y, jupiterPosition.z);
	jupiter.scale.set(1, 1, 1);

	// saturn
	saturn.position.set(saturnPosition.x, saturnPosition.y, saturnPosition.z);
	saturn.scale.set(1, 1, 1);

	// uranus
	uranus.position.set(uranusPosition.x, uranusPosition.y, uranusPosition.z);
	uranus.scale.set(1, 1, 1);

	// neptune
	neptune.position.set(neptunePosition.x, neptunePosition.y, neptunePosition.z);
	neptune.scale.set(1, 1, 1);

	// pluto
	pluto.position.set(plutoPosition.x, plutoPosition.y, plutoPosition.z);
	pluto.scale.set(1, 1, 1);
}

function scaleAllUp(scaleAmount) {
	var child = scene.getObjectByName("planetsAndSun");

	for (var i = 0; i < child.children.length; i++) {
		oldScale = child.children[i].scale.x;
		if (child.children[i].name != "Sun") {
			child.children[i].scale.set(oldScale * scaleAmount, oldScale * scaleAmount, oldScale * scaleAmount);
		} else {
			child.children[i].scale.set(oldScale * (scaleAmount + 0.5), oldScale * (scaleAmount + 0.5), oldScale * (scaleAmount + 0.5));
		}
	}
}

function scaleAllUpExceptSun(scaleAmount) {
	if (scaleUpAmount < scaleUpMax) {
		scaleUpAmount++;
		var child = scene.getObjectByName("planetsAndSun");

		for (var i = 0; i < child.children.length; i++) {
			if (child.children[i].name != "Sun") {
				oldScale = child.children[i].scale.x;
				child.children[i].scale.set(oldScale * scaleAmount, oldScale * scaleAmount, oldScale * scaleAmount);
			}
		}
	} else {
		console.log(scaleUpAmount);
	}
}

function scaleDownXDistanceByPercent(scaleAmount) {
	if (scaleInAmount < scaleMax) {
		scaleInAmount++;
		var child = scene.getObjectByName("planetsAndSun");

		for (var i = 0; i < child.children.length; i++) {
			xOld = child.children[i].position.x;
			child.children[i].position.setX(xOld * (1 - (scaleAmount / 100)));
		}
	} else {
		console.log(scaleInAmount);
		console.log("Reached Max Scale In Amount");
	}
}

function scaleAllDown(scaleAmount) {
	var child = scene.getObjectByName("planetsAndSun");

	for (var i = 0; i < child.children.length; i++) {
		oldScale = child.children[i].scale.x;
		child.children[i].scale.set(oldScale / scaleAmount, oldScale / scaleAmount, oldScale / scaleAmount);
	}
}

function scaleAllDownExceptSun(scaleAmount) {
	if (scaleUpAmount > -scaleUpMax) {
		scaleUpAmount--;
		var child = scene.getObjectByName("planetsAndSun");

		for (var i = 0; i < child.children.length; i++) {
			if (child.children[i].name != "Sun") {
				oldScale = child.children[i].scale.x;
				child.children[i].scale.set(oldScale / scaleAmount, oldScale / scaleAmount, oldScale / scaleAmount);
			}
		}
	} else {
		console.log(scaleUpAmount);
	}
}

function scaleUpXDistanceByPercent(scaleAmount) {
	if (scaleInAmount > -scaleMax) {
		scaleInAmount--;
		var child = scene.getObjectByName("planetsAndSun");

		for (var i = 0; i < child.children.length; i++) {
			xOld = child.children[i].position.x;
			child.children[i].position.setX(xOld * (1 + (scaleAmount / 100)));
		}
	} else {
		console.log(scaleInAmount);
		console.log("Reached Max Scale In Amount");
	}
}
