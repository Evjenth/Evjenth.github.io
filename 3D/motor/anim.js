// JavaScript source code
var scene, renderer, camera;

function init() {
    var container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.orbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    camera.position.set(2, 2, 0);

    renderer.render(scene, camera);
}
init();
