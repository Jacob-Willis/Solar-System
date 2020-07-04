function Pluto(fragments) {
  var geometry = new THREE.SphereGeometry(plutoRadius, fragments, fragments);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Resources/Textures/Planets/Pluto_Texture.jpg') });
  material.color = new THREE.Color(1, 1, 1);

  var sphere = new THREE.Mesh(geometry, material);
  sphere.name = "Pluto";
  sphere.position.set(plutoPosition.x, plutoPosition.y, plutoPosition.z)

  return sphere;
}