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

function nextPiece() {
    pieceCount++;
    if (pieceCount == 5) {
        pieceCount = 4;
        return;
    }

    switch (pieceCount) {
        case 1:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object) {
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.position.x = -3;
                    object.position.y = 0;
                    object.position.z = 0;
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; node.receiveShadow = true; } });
                    objects[0] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0, 0, 0], frames: 50, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    scene.add(objects[0].geometry);


                });

            });
            break;
        case 2:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object1) {
                    object1.rotation.x = Math.PI / 2;
                    object1.scale.x = 0.01;
                    object1.scale.y = 0.01;
                    object1.scale.z = 0.01;

                    object1.position.z = 3;
                    object1.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
                    objects[1] = { geometry: object1, startpos: [object1.position.x, object1.position.y, object1.position.z], endpos: [0, 0, 0], frames: 50, frameCount: 0 };
                    objects[1].geometry.castShadow = true;
                    scene.add(objects[1].geometry);
                });
            });
            break;
        case 3:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object2) {
                    object2.rotation.x = Math.PI / 2;
                    object2.scale.x = 0.01;
                    object2.scale.y = 0.01;
                    object2.scale.z = 0.01;
                    object2.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
                    objects[2] = { geometry: object2, startpos: [object2.position.x, object2.position.y, object2.position.z], endpos: [0, 0, -1.55], frames: 50, frameCount: 0 };
                    scene.add(objects[2].geometry);

                });
            });
            break;
        case 4:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object) {
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
                    //object.position.y = 1.45;
                    objects[3] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0, 1.45, 0], frames: 50, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    objects[0].geometry.receiveShadow = true;
                    objects[0].needsUpdate = true;
                    scene.add(objects[3].geometry);
                });
            });
            break;
    }

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
    camera.position.x = -4;
    camera.position.z = 4;
    camera.position.y = 2;

    scene = new THREE.Scene();



    hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 2);
    scene.add(hemiLight);

    spotlight = new THREE.SpotLight(0xddeeff, 50);
    spotlight.position.set(5, 5, 0);
    spotlight.distance = 10;
    spotlight.castShadow = true;

    spotlight.shadow.camera.near = 1;
    spotlight.shadow.camera.far = 20;
    scene.add(spotlight);


    var boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var boxMesh = new THREE.Mesh(boxGeometry, cubeMat);
    boxMesh.position.set(-0.5, 0.25, -1);
    boxMesh.castShadow = true;
    scene.add(boxMesh);


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


    if (objects[0] != undefined) {
        if (objects[0].frameCount < objects[0].frames) {
            objects[0].geometry.position.x += ((objects[0].endpos[0] - objects[0].startpos[0]) / objects[0].frames);
            objects[0].geometry.position.y += ((objects[0].endpos[1] - objects[0].startpos[1]) / objects[0].frames);
            objects[0].geometry.position.z += ((objects[0].endpos[2] - objects[0].startpos[2]) / objects[0].frames);
            //console.log(objects[0].geometry.position);
            objects[0].frameCount++;
        }
    }
    if (objects[1] != undefined) {
        if (objects[1].frameCount < objects[1].frames) {
            objects[1].geometry.position.x += ((objects[1].endpos[0] - objects[1].startpos[0]) / objects[1].frames);
            objects[1].geometry.position.y += ((objects[1].endpos[1] - objects[1].startpos[1]) / objects[1].frames);
            objects[1].geometry.position.z += ((objects[1].endpos[2] - objects[1].startpos[2]) / objects[1].frames);
            //console.log(objects[1].geometry.position);
            objects[1].frameCount++;
        }
    }
    if (objects[2] != undefined) {
        if (objects[2].frameCount < objects[2].frames) {
            objects[2].geometry.position.x += ((objects[2].endpos[0] - objects[2].startpos[0]) / objects[2].frames);
            objects[2].geometry.position.y += ((objects[2].endpos[1] - objects[2].startpos[1]) / objects[2].frames);
            objects[2].geometry.position.z += ((objects[2].endpos[2] - objects[2].startpos[2]) / objects[2].frames);
            //console.log(objects[2].geometry.position);
            objects[2].frameCount++;
        }
    }
    if (objects[3] != undefined) {
        if (objects[3].frameCount < objects[3].frames) {
            objects[3].geometry.position.x += ((objects[3].endpos[0] - objects[3].startpos[0]) / objects[3].frames);
            objects[3].geometry.position.y += ((objects[3].endpos[1] - objects[3].startpos[1]) / objects[3].frames);
            objects[3].geometry.position.z += ((objects[3].endpos[2] - objects[3].startpos[2]) / objects[3].frames);
            //console.log(objects[3].geometry.position);
            objects[3].frameCount++;

        }
    }

    //bulbLight.power = 100;//bulbLuminousPowers[ params.bulbPower ];
    //bulbMat.emissiveIntensity = 1000;// bulbLight.intensity / Math.pow( 0.02, 2.0 ); // convert from intensity to irradiance at bulb surface

    //hemiLight.intensity = 5;//hemiLuminousIrradiances[ params.hemiIrradiance ];
    //var time = Date.now() * 0.0005;
    var delta = clock.getDelta();

    //bulbLight.position.y = Math.cos( time ) * 0.75 + 1.25;

    renderer.render(scene, camera);

    stats.update();

}