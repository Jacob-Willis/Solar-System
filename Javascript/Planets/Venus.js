function Venus(fragments) {
  var geometry = new THREE.SphereGeometry(venusRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Venus_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Venus";
  sphere.position.set(venusPosition.x, venusPosition.y, venusPosition.z)

  return sphere;
}