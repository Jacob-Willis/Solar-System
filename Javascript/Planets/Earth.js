function Earth(fragments) {
  var geometry = new THREE.SphereGeometry(earthRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Earth_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Earth";
  sphere.position.set(earthPosition.x, earthPosition.y, earthPosition.z)

  return sphere;
}