var holder = new THREE.Object3D();


load('caliper')

function load(name) {
    var path = 'models/obj/';
    var mtlloader = new THREE.MTLLoader();
    var objloader = new THREE.OBJLoader();
    objloader.setPath(path);
    mtlloader.setPath(path);
    mtlloader.load(name + '.mtl', function (materials) {
        materials.preload();
        objloader.setMaterials(materials);
        objloader.load(name + '.obj', function (object) {
            object.rotation.set(0,0,-Math.PI/2);
            holder.add(object)
        });
    });
}
