// JavaScript source code

if (!Detector.webgl) Detector.addGetWebGLMessage();
var angle = 0;
var x_location = 0;
var ang_increment = 0.05;
var falling = false;
var clock = new THREE.Clock(true);
document.onkeydown = function (key) { reactKey(key); }
function reactKey(key) {
    switch (key.keyCode) {
        case 65:
            angle -= ang_increment;
            if (angle < 0) {
                angle = Math.PI * 2;
            }
            break;
        case 68:
            angle += ang_increment;
            if (angle > Math.PI * 2) {
                angle = 0;
            }
            break;
        case 32:
            if (gameObject.verticalVelocity == 0) {
                gameObject.verticalVelocity = 4;
                clock.getDelta();
            }
            break;
    }
}

var container;
var camera, cameraTarget, scene, renderer;
init();
animate();
function init() {
    container = document.createElement('div');
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 15);
    camera.position.set(3, 1, 3);
    cameraTarget = new THREE.Vector3(0, -0.25, 0);
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x72645b, 2, 15);
    // Ground
    var plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(500, 2),
        new THREE.MeshPhongMaterial({ color: 0xaa55ff, specular: 0x101010 })
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.5;
    scene.add(plane);
    plane.receiveShadow = true;



    scene.add(gameObject.geometry);  

    // Lights
    scene.add(new THREE.HemisphereLight(0x443333,2));

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
   
    gameObject.geometry.position.x += (Math.cos(angle) * gameObject.horizontalVelocity);
    gameObject.geometry.position.z += (Math.sin(angle) * gameObject.horizontalVelocity);
    if (gameObject.geometry.position.x - 1 > x_location) {
        addNewBox([++x_location + 5, -0.4, Math.random() * 1.8 - 0.9]);
        if (x_location > 8) {
            scene.remove(boxes[0]);
            boxes = boxes.slice(1, boxes.length);
        }
    }

    if (Math.abs(gameObject.geometry.position.z) > (1+gameObject.radius/2)) {
        falling = true;
    } else {
        falling = false;
    }
    if (gameObject.geometry.position.y != gameObject.ground || gameObject.verticalVelocity != 0 || falling) {
        var delta = clock.getDelta();
        gameObject.verticalVelocity = gameObject.verticalVelocity - 9.81 * delta;
        gameObject.geometry.position.y += gameObject.verticalVelocity * delta;
        if (gameObject.geometry.position.y < gameObject.ground && !falling) {
            gameObject.geometry.position.y = gameObject.ground;
            gameObject.verticalVelocity = 0;
        }
    }

    cameraTarget = new THREE.Vector3(gameObject.geometry.position.x, gameObject.geometry.position.y, gameObject.geometry.position.z);
    camera.position.x = gameObject.geometry.position.x - Math.cos(angle);
    camera.position.z = gameObject.geometry.position.z - Math.sin(angle);
    camera.position.y = gameObject.geometry.position.y + 0.5;


    //camera.position.z = Math.sin(angle) * 3;
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
}