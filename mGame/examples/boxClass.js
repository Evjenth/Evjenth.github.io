// JavaScript source code
var material = [];
var boxes = [];
material[0] = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
material[1] = new THREE.MeshBasicMaterial({ color: 0x00ffff });
material[2] = new THREE.MeshBasicMaterial({ color: 0x0000ff });
material[3] = new THREE.MeshBasicMaterial({ color: 0x000000 });
material[4] = new THREE.MeshBasicMaterial({ color: 0xffff00 });
material[5] = new THREE.MeshBasicMaterial({ color: 0xff0000 });
function addNewBox(position) {
    var geometry = new THREE.BoxGeometry(.2, .2, .2);
    var box
    box = new THREE.Mesh(geometry, material);
    box.position.set(position[0],position[1],position[2]);
    box.castShadow = true;
    box.receiveShadow = true;
    boxes.push(box)
    scene.add(boxes[boxes.length-1]);
}