var ballMat, cubeMat, floorMat, spotlight, spotlight1;

var hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 10);

var room = buildRoom();
function buildRoom() {
    var room = new THREE.Object3D();
    var walls = [];
    var wallGeometry = new THREE.PlaneBufferGeometry(20, 10, 20, 10);
    var wallMat = new THREE.MeshPhongMaterial({ color: "#" + ((1 << 24) * Math.random() | 0).toString(16) });
    for (var i = 0; i < 5; i++) {
        walls[i] = new THREE.Mesh(wallGeometry, wallMat);

    }
    walls[0].position.set(0, 5, -10);
    walls[1].rotation.y = Math.PI / 2;
    walls[1].position.set(-10, 5, 0);
    walls[2].rotation.y = - Math.PI / 2;
    walls[2].position.set(10, 5, 0);
    walls[3].rotation.y = Math.PI;
    walls[3].position.set(0, 5, 10);
    walls[4].rotation.x = Math.PI / 2;
    walls[4].scale.y = 2;
    walls[4].position.set(0, 10, 0);

    for (var i = 0; i < walls.length; i++) {
        walls[i].matrixAutoUpdate = false;
        walls[i].updateMatrix();
        room.add(walls[i]);
    }

    return room;
}

var pointLight = new THREE.PointLight(0xf0f0f0, 10, 100);
pointLight.position.set(3,3,3);


spotlight = new THREE.SpotLight(0xf0f0f0, 200,20,Math.PI/2,0,2);
spotlight.position.set(0, 8, 0);
spotlight1 = new THREE.SpotLight(0xf0f0f0, 200,50,Math.PI/2,0,2);
spotlight1.position.set(10, 10, 10);


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
    map.anisotropy = 1;
    map.repeat.set(5,12);
    floorMat.map = map;
    floorMat.needsUpdate = true;
});
textureLoader.load("textures/hardwood2_bump.jpg", function (map) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 1;
    map.repeat.set(5,12);
    floorMat.bumpMap = map;
    floorMat.needsUpdate = true;
});
textureLoader.load("textures/hardwood2_roughness.jpg", function (map) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 1;
    map.repeat.set(5,12);
    floorMat.roughnessMap = map;
    floorMat.needsUpdate = true;
});

var floorGeometry = new THREE.PlaneBufferGeometry(20, 20);
var floorMesh = new THREE.Mesh(floorGeometry, floorMat);
//floorMesh.receiveShadow = false;
floorMesh.rotation.x = -Math.PI / 2.0;
floorMesh.matrixAutoUpdate = false;
floorMesh.updateMatrix();