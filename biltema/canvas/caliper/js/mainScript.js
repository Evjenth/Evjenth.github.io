var camera, scene, renderer;

var controls;

var window_width, window_height;

init();
animate();

function init() {
    window_width = document.getElementById("container").offsetWidth;
    window_height = document.getElementById("container").offsetHeight;
    setCamera();
    setScene();
    setRenderer();
    setControls();
}

function setControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0,0, 0);
    controls.update();
}

function setCamera() {

    camera = new THREE.PerspectiveCamera(50, window_width/window_height, 0.01, 3000);
    camera.position.set(200, 10, 0);
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
    renderer.setSize(window_width, window_height);
    document.getElementById('container').appendChild(renderer.domElement);
}

function onWindowResize() {
    window_width = document.getElementById("container").offsetWidth;
    window_height = document.getElementById("container").offsetHeight;
    camera.aspect = window_width/window_height;
    camera.updateProjectionMatrix();
    renderer.setSize(window_width,window_height);
}

function animate() {
    holder.rotation.y -= 0.01;
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera);
}