// JavaScript source code
var container = document.getElementById("container");
var scene, camera, renderer, hemisphereLight;
var cameraY = 5;
var cameraX = 5;
var cameraZ = 5;
var radius, theta, phi;
theta = 0;
phi = 0;
radius = 5;

cameraZ = radius * Math.sin(theta) * Math.cos(phi);
cameraY = radius * Math.sin(theta) * Math.sin(phi);
cameraX = radius * Math.cos(theta);

camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(cameraX, cameraY, 12);

hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5);

scene = new THREE.Scene();
scene.add(hemisphereLight);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

container.appendChild(renderer.domElement);


var box = new THREE.BoxGeometry(2, 2, 2);
var cubeMat = new THREE.MeshStandardMaterial({
    roughness: 0.7,
    color: 0xffffff,
    bumpScale: 0.002,
    metalness: 0.2
});

var boxMesh = new THREE.Mesh(box, cubeMat);
boxMesh.position.set(0, 0, 0);
scene.add(boxMesh);
camera.lookAt(new THREE.Vector3(0, 0, 0));
renderer.render(scene, camera);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
}


document.onkeydown = function (key) { reactKey(key); }
function reactKey(evt) {
    switch (evt.keyCode) {
        case 171:
            radius -= 0.1;
            break;
        case 173:
            radius += 0.1;
            break;
        case 65:
            theta = theta < 0 ? Math.PI : theta - 0.1;
            break;
        case 68:
            theta = theta >= Math.PI ? 0 : theta + 0.1;
            break;
        case 87:
            phi += 0.1;
            break;
        case 83:
            phi -= 0.1;
            break;
    }
    console.log(evt.keyCode);

}

animate();

function animate() {

    requestAnimationFrame(animate);

    render();

}


function render() {
    cameraX = radius * Math.cos(theta);
    cameraY = radius * Math.sin(phi) * Math.abs(Math.cos(theta));
    cameraZ = radius * Math.sin(theta);
    camera.position.set(cameraX, cameraY, cameraZ);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);

}
