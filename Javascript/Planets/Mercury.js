function Mercury(fragments) {
  var geometry = new THREE.SphereGeometry(mercuryRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Mercury_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Mercury";
  sphere.position.set(mercuryPosition.x, mercuryPosition.y, mercuryPosition.z)

  return sphere;
}