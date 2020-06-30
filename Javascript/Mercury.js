function Mercury(radius, fragments) {
  var geometry = new THREE.SphereGeometry(radius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../Resources/Textures/Mercury_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Mercury";

  return sphere;
}