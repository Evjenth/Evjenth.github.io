// JavaScript source code

if (!Detector.webgl) Detector.addGetWebGLMessage();
var angle = 0;
var ang_increment = 0.07;
document.onkeydown = function (key) { reactKey(key); }
function reactKey(key) {
    var val = key.keyCode;

    if (val == 65) {
        angle -= ang_increment;
        if (angle < 0) {
            angle = Math.PI * 2;
        }
    } else if (val == 68) {
        angle += ang_increment;
        if (angle > Math.PI * 2) {
            angle = 0;
        }
    }
    console.log(angle);
}

var container;
var cubes = [];
var gameBall;
var camera, cameraTarget, scene, renderer;
init();
animate();
function init() {
    container = document.createElement('div');
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 15);
    camera.position.set(3, 1, 3);
    cameraTarget = new THREE.Vector3(0, -0.25, 0);
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x72645b, 2, 15);
    // Ground
    var plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(40, 40),
        new THREE.MeshPhongMaterial({ color: 0x999999, specular: 0x101010 })
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.5;
    scene.add(plane);
    plane.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(.2, .2, .2);
    var material = [];
    material[0] = new THREE.MeshBasicMaterial({ color: 0x808080 });
    material[1] = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    material[2] = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    material[3] = new THREE.MeshBasicMaterial({ color: 0x000000 });
    material[4] = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    material[5] = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    cubes[0] = new THREE.Mesh(geometry, material);
    cubes[0].position.set(0, -0.4, 0);
    cubes[0].castShadow = true;
    cubes[0].receiveShadow = true;
    scene.add(cubes[0]);
    cubes[1] = cubes[0].clone();
    cubes[1].position.set(0.25, -0.4, 0.25);
    scene.add(cubes[1]);

    var ballGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    var ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    gameBall = new THREE.Mesh(ballGeometry, ballMaterial);
    gameBall.position.y = -0.4;
    scene.add(gameBall);

    // Lights
    scene.add(new THREE.HemisphereLight(0x443333, 0x111122));
    addShadowedLight(1, 1, 1, 0xffffff, 1.35);
    addShadowedLight(0.5, 1, -1, 0xffaa00, 1);
    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(scene.fog.color);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.renderReverseSided = false;
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}
function addShadowedLight(x, y, z, color, intensity) {
    var directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(x, y, z);
    scene.add(directionalLight);
    directionalLight.castShadow = true;
    var d = 1;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 4;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.bias = -0.005;
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
    var timer = Date.now() * 0.0005;
    cubes[1].position.x = Math.cos(timer * 10) * 0.4;
    cubes[1].position.z = Math.sin(timer * 10) * 0.4;
    //camera.position.x = Math.cos(timer) * 3;
    //camera.position.z = Math.sin(timer) * 3;
    gameBall.position.x += Math.cos(angle) * 0.01;
    gameBall.position.z += - Math.sin(angle) * 0.01;

    cameraTarget = new THREE.Vector3(gameBall.position.x, gameBall.position.y, gameBall.position.z);
    camera.position.x = gameBall.position.x - Math.cos(angle) * 3;
    camera.position.z = - gameBall.position.y + Math.sin(angle) * 3;
    
    //camera.position.z = Math.sin(angle) * 3;
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
}