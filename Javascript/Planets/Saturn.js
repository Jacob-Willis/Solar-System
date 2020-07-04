function Saturn( fragments) {
  var geometry = new THREE.SphereGeometry(saturnRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Saturn_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Saturn";
  sphere.position.set(saturnPosition.x, saturnPosition.y, saturnPosition.z)

  return sphere;
}