// JavaScript source code
var scene, renderer, camera;

function init() {
    var container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    scene = new THREE.Scene();
    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
    var geometry = new THREE.SphereGeometry(.5, 10, 10);
    var material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        polygonOffset: true,
        polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh)

    // wireframe
    var geo = new THREE.EdgesGeometry(mesh.geometry); // or WireframeGeometry
    var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    var wireframe = new THREE.LineSegments(geo, mat);
    mesh.add(wireframe);
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
