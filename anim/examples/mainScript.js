document.onkeydown = function (key) { reactKey(key); }
var pieceCount = 0;
var objects = [];
function reactKey(evt) {
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        nextPiece();
    } else if (evt.keyCode == 65 || evt.keyCode == 37) {
        prevPiece();
    }
}

function prevPiece() {
    pieceCount--;
    if (pieceCount == -1) {
        pieceCount = 0;
        return;
    }
    scene.remove(objects[pieceCount].geometry);
}


if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer, spotlight,
    bulbMat, ambientLight,
    object, loader, stats;
var ballMat, cubeMat, floorMat;



var clock = new THREE.Clock();

init();
animate();

function init() {

    var container = document.getElementById('container');

    stats = new Stats();
    container.appendChild(stats.dom);


    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 7, 12);
    
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
    spotlight1.position.set(-5,5, 0);
    spotlight1.distance = 40;
    spotlight.castShadow = true;
    scene.add(spotlight1);


  


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




    renderer = new THREE.WebGLRenderer({ antialis : true });
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
    controls.update();
    camera.lookAt(new THREE.Vector3(0, 5, 0));
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
    
    for (var a = 0; a < objects.length ; a++){
        if (objects[a] != undefined) {
            if (objects[a].frameCount < objects[a].frames) {
                objects[a].geometry.position.set(
                    objects[a].geometry.position.x + ((objects[a].endpos[0] - objects[a].startpos[0]) / objects[a].frames),
                    objects[a].geometry.position.y + ((objects[a].endpos[1] - objects[a].startpos[1]) / objects[a].frames),
                    objects[a].geometry.position.z + ((objects[a].endpos[2] - objects[a].startpos[2]) / objects[a].frames));

                objects[a].frameCount++;
            }
        }
    }
    

    renderer.render(scene, camera);

    stats.update();

}