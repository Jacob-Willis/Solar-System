function Venus(radius, fragments) {
  var geometry = new THREE.SphereGeometry(radius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../Resources/Textures/Venus_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  console.log("HELLO");

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Venus";

  return sphere;
}