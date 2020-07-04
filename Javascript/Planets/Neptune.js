function Neptune(fragments) {
  var geometry = new THREE.SphereGeometry(neptuneRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Neptune_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Neptune";
  sphere.position.set(neptunePosition.x, neptunePosition.y, neptunePosition.z)

  return sphere;
}