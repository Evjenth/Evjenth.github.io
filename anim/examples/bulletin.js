var bulletin = new THREE.Object3D();
var cylinderGeometry = new THREE.CylinderGeometry(.2,.2,5.10);
var cylinderMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
var cylinder = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
cylinder.position.y = 2.5;
bulletin.add(cylinder);

var cyl2 = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
cyl2.position.set(5,2.5,0);
bulletin.add(cyl2);

var rectangleGeometry = new THREE.BoxGeometry(5,3,0.1);
var rectangleMaterial = new THREE.MeshBasicMaterial({color:0x222222});
var box = new THREE.Mesh(rectangleGeometry,rectangleMaterial);
box.position.x = 2.5;
box.position.y = 3.5;
bulletin.add(box);

var loader = new THREE.TextureLoader();
loader.load('ikea.png', function ( texture ) {
  var geometry = new THREE.PlaneGeometry(5,3);
  var material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(2.5,3.5,0.1);
  bulletin.add(mesh);
  bulletin.position.set(-2.5,0,-7);
});