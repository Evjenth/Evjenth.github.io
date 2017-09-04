// JavaScript source code
var scene, renderer, camera;

function init() {
    var container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    scene = new THREE.Scene();
    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
    var geometry = new THREE.SphereGeometry(.5, 10, 10);
    var geo = new THREE.EdgesGeometry(geometry); // or WireframeGeometry( geometry )

    var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });

    var wireframe = new THREE.LineSegments(geo, mat);
    scene.add(wireframe);
    scene.add(wireframe);
    var material = new THREE.MeshBasicMaterial({ color: 0x2222ff });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    camera.position.set(2, 2, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
init();
