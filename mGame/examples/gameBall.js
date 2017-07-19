// JavaScript source code
var gameBall;
var gameObject;
var radius = 0.1;
var ballGeometry = new THREE.SphereGeometry(radius, 16, 16);
var ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
gameBall = new THREE.Mesh(ballGeometry, ballMaterial);
gameBall.position.y = -0.4;
gameBall.castShadow = true;

gameObject = { geometry: gameBall, horizontalVelocity:0.04, verticalVelocity:0, ground:-0.4, radius:radius};