function Mars(fragments) {
  var geometry = new THREE.SphereGeometry(marsRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Mars_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Mars";
  sphere.position.set(marsPosition.x, marsPosition.y, marsPosition.z)

  return sphere;
}