document.onkeydown = function (key) { reactKey(key); }
var pieceCount = 0;
var objects = [];
var instructions = [];
instructions[0] = "1. Place the bottom plate (id number #1441123) on the floor. The side with the traces should be turned upward. Use a carpet to prevent scratches";
instructions[1] = "2. Insert the latch screws (x6).";
instructions[2] = "3. Attach the side plates. Align the bigger holes at the bottom to the latch screws and push in the plate. Push to plate so that the screws locks into the plate with an audible *click*";
instructions[3] = "4. Slide the backplate down the traces. The rough side should be turned towards the back";
instructions[4] = "5. Place the top plate on the floor. Insert the screws (x4) to the plate. Insert the wood plugs on top of the side plates (x4)";
instructions[5] = "6. Place the top plate above the side plates. Align the back plate with the traces in the top plate";
instructions[6] = "7. Lower the top plate onto the wood plugs. Insert the anchors";
var clock = new  THREE.Clock(true);



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
    if(objects[pieceCount] != undefined){
    scene.remove(objects[pieceCount].geometry);
}
if(pieceCount == 6){
    for(var a = 1 ; a < 6 ; a++){
        scene.remove(objects[a].geometry);
    }
    pieceCount = 1;
}else if(pieceCount == 11 || pieceCount == 12 || pieceCount == 13){
    scene.remove(objects[10].geometry);
    if(objects[11] != undefined){
        scene.remove(objects[11].geometry);
    }

    pieceCount = 10;
}
console.log(pieceCount);
document.getElementById("instruction").innerHTML = "";

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

    for (var a = 0; a < objects.length ; a++){
        if (objects[a] != undefined) {
            var frames = objects[a].frames;
            if (objects[a].frameCount < frames) {
                objects[a].geometry.position.set(
                    objects[a].geometry.position.x + ((objects[a].endpos[0] - objects[a].startpos[0]) / frames),
                    objects[a].geometry.position.y + ((objects[a].endpos[1] - objects[a].startpos[1]) / frames),
                    objects[a].geometry.position.z + ((objects[a].endpos[2] - objects[a].startpos[2]) / frames));

                if(objects[a].startRotation != undefined){
                    objects[a].geometry.rotation.set(
                        objects[a].geometry.rotation.x + ((objects[a].endRotation[0]-objects[a].startRotation[0]) / frames),
                        objects[a].geometry.rotation.y + ((objects[a].endRotation[1]-objects[a].startRotation[1]) / frames),
                        objects[a].geometry.rotation.z + ((objects[a].endRotation[2]-objects[a].startRotation[2]) / frames)
                        );
                }
                objects[a].frameCount++;
            }else if(objects[a].frameCount < frames + objects[a].secondFrames){
                objects[a].geometry.position.set(
                    objects[a].geometry.position.x + ((objects[a].interPos[0] - objects[a].endpos[0]) / frames),
                    objects[a].geometry.position.y + ((objects[a].interPos[1] - objects[a].endpos[1]) / frames),
                    objects[a].geometry.position.z + ((objects[a].interPos[2] - objects[a].endpos[2]) / frames)
                );
                objects[a].frameCount++;


            }
        }
    }
    

    renderer.render(scene, camera);

    stats.update();

}