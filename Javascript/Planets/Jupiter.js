function Jupiter(fragments) {
  var geometry = new THREE.SphereGeometry(jupiterRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Jupiter_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Jupiter";
  sphere.position.set(jupiterPosition.x, jupiterPosition.y, jupiterPosition.z)

  return sphere;
}