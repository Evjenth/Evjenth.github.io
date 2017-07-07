var ballMat, cubeMat, floorMat, spotlight, spotlight1;

var hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5);

spotlight = new THREE.SpotLight(0xddeeff, 50);
spotlight.position.set(5, 5, 0);
spotlight.distance = 10;
spotlight.castShadow = true;

spotlight.shadow.camera.near = 1;
spotlight.shadow.camera.far = 20;

spotlight1 = new THREE.SpotLight(0xddeeff, 50);
spotlight1.position.set(-5, 5, 0);
spotlight1.distance = 40;
spotlight.castShadow = true;


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