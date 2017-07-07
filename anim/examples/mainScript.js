document.onkeydown = function (key) { reactKey(key); }
function reactKey(key){
    piece(key);
}
var count = 0;

if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer, spotlight,
    bulbMat, ambientLight,
    object, loader, stats;
var ballMat, cubeMat, floorMat;

function writeText(message) {
    document.getElementById("instruction").innerHTML = message;
}

var clock = new THREE.Clock();

init();
animate();

function init() {

    var container = document.getElementById('container');

    stats = new Stats();
    container.appendChild(stats.dom);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
    scene = new THREE.Scene();

    hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5);
    scene.add(hemiLight);

    spotlight = new THREE.SpotLight(0xddeeff, 50);
    spotlight.position.set(5, 5, 0);
    spotlight.distance = 10;
    spotlight.castShadow = true;

    spotlight.shadow.camera.near = 1;
    spotlight.shadow.camera.far = 20;
    scene.add(spotlight);

    spotlight1 = new THREE.SpotLight(0xddeeff, 50);
    spotlight1.position.set(-5, 5, 0);
    spotlight1.distance = 40;
    spotlight.castShadow = true;
    scene.add(spotlight1);

    scene.add(holder);

    floorMat = new THREE.MeshStandardMaterial({
        roughness: 0.8,
        color: 0xffffff,
        metalness: 0.2,
        bumpScale: 0.005
    });
    var textureLoader = new THREE.TextureLoader();
    textureLoader.load("textures/hardwood2_diffuse.jpg", function (map) {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set(10, 24);
        floorMat.map = map;
        floorMat.needsUpdate = true;
    });
    textureLoader.load("textures/hardwood2_bump.jpg", function (map) {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set(10, 24);
        floorMat.bumpMap = map;
        floorMat.needsUpdate = true;
    });
    textureLoader.load("textures/hardwood2_roughness.jpg", function (map) {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set(10, 24);
        floorMat.roughnessMap = map;
        floorMat.needsUpdate = true;
    });

    var floorGeometry = new THREE.PlaneBufferGeometry(20, 20);
    var floorMesh = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = -Math.PI / 2.0;
    scene.add(floorMesh);

    renderer = new THREE.WebGLRenderer({ antialis: true });
    renderer.physicallyCorrectLights = true;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    camera.position.set(0, 7, 12);
    controls.update();
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
    requestAnimationFrame(animate);
    render();
}


function render() {
    for (var a = 0; a < furObjects.length; a++) {
        var pos = furObjects[a].getPos();
        var goalPos = furObjects[a].goalPos.slice();
        var rot = furObjects[a].getRot();
        var goalRot = furObjects[a].goalRot.slice();
        var equal = true;
        for (var b = 0; b < pos.length; b++) {
            if (pos[b] != goalPos[b] || rot[b] != goalRot[b]) {
                equal = false;
            }
        }
        if (!equal) {
            var nPos = [];
            var nRot = [];
            for (var c = 0; c < 3; c++) {
                nPos[c] = pos[c] + 2 * Math.sign(goalPos[c] - pos[c]);
                var diffRot = Math.abs(goalRot[c] - rot[c]);
                if (diffRot < 0.05) {
                    nRot[c] = goalRot[c];
                } else {
                    nRot[c] = rot[c] + Math.sign((goalRot[c] - rot[c])) / 50;
                }
            }
            furObjects[a].setPos(nPos);
            furObjects[a].setRot(nRot);
        }
    }
    renderer.render(scene, camera);

    stats.update();

}