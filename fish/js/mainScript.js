var camera, scene, renderer;
var frames = 0;

init();
animate();

function init() {
    setCamera();
    setScene();
    setRenderer();
    setControls();
}

function setControls() {
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 3, 0);
    controls.update();
}

function setCamera() {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(5, 10, 20);
    camera.lookAt(new THREE.Vector3(0, 3, 0));
    window.addEventListener('resize', onWindowResize, false);
}

function setScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.add(holder);
    scene.add(room);
}

function setRenderer() {
    renderer = new THREE.WebGLRenderer({ antialis: true });
    renderer.physicallyCorrectLights = true;
    renderer.gammaInput = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    frames++;
    requestAnimationFrame(animate);
    render();
}

function render() {
    shelfTick();
    renderer.render(scene, camera);
}