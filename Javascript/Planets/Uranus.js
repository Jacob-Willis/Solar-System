function Uranus(fragments) {
  var geometry = new THREE.SphereGeometry(uranusRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Uranus_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Uranus";
  sphere.position.set(uranusPosition.x, uranusPosition.y, uranusPosition.z)

  return sphere;
}