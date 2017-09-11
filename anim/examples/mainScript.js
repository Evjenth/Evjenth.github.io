document.onkeydown = function (key) { reactKey(key); }
//Keyboard press
function reactKey(key) {
    piece(key.keyCode);
}

var count = 0;

var camera, scene, renderer,
    object, loader;

init();
animate();

function init() {
    var container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.add(floorMesh);
    scene.add(hemiLight);
    scene.add(spotlight);
    scene.add(spotlight1);
    scene.add(holder);
    for (var i = 0; i < 4; scene.add(walls[i]), i++);

    renderer = new THREE.WebGLRenderer({ antialis: true });
    renderer.physicallyCorrectLights = true;
    renderer.gammaInput = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 3, 0);
    camera.position.set(5, 10, 20);
    controls.update();
    camera.lookAt(new THREE.Vector3(0, 3, 0));
    window.addEventListener('resize', onWindowResize, false);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
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
                nPos[c] = pos[c] + 0.1 * Math.sign(goalPos[c] - pos[c]);
                if (Math.abs(goalPos[c] - pos[c]) < 0.1)
                    nPos[c] = goalPos[c];
                var diffRot = Math.abs(goalRot[c] - rot[c]);
                if (diffRot < 0.2) {
                    nRot[c] = goalRot[c];
                } else {
                    nRot[c] = rot[c] + Math.sign((goalRot[c] - rot[c])) / 10;
                }
            }
            furObjects[a].setPos(nPos);
            furObjects[a].setRot(nRot);
        }
    }

}