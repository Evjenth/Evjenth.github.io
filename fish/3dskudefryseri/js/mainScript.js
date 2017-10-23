var camera, scene, renderer;
var camera_current_position = [5, 10, 20];
var camera_goal_position = [5, 10, 20];
var controls;
var lookAtCurrent = new THREE.Vector3(0, 3, 0);
var lookAtGoal = new THREE.Vector3(0, 3, 0);

init();
animate();

function init() {
    setCamera();
    setScene();
    setRenderer();
    setControls();
}

function setControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 3, 0);
    controls.update();
}

function setCamera() {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 300);
    camera.position.set(5, 10, 20);
    camera_current_position = [5, 10, 20];
    camera.lookAt(lookAtCurrent);
    window.addEventListener('resize', onWindowResize, false);
}

function setScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.add(holder);
    scene.add(holderDrawer1);
    scene.add(holderObjects);
    scene.add(holderScrews);
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
    requestAnimationFrame(animate);
    render();
}

function render() {
    if (count == -1 || count == 18) {
        holder.rotation.y += 0.005;
    }

    shelfTick();
    cameraTick();
    renderer.render(scene, camera);
}