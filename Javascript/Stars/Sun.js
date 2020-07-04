function Sun(fragments) {
  var geometry = new THREE.SphereGeometry(sunRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Stars/Sun_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Sun";
  sphere.position.set(sunPosition.x, sunPosition.y, sunPosition.z)

  return sphere;
}