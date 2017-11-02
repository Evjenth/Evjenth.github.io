
var room = buildRoom();


function buildRoom() {
    var room = new THREE.Object3D();
    var hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 10);
    room.add(hemiLight);

    return room;
}
