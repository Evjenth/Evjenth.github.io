var holder = new THREE.Object3D();

var furObjects = [];
//holder.scale.set(0.01, 0.01, 0.01);
holder.position.set(0, 0, 5 / 100);

//                               THIS ARRAY IS THE SCALES (X,Y,Z(Y is up)).
load('bottom', [-3.5, 0, -0.5],0,[0.01,0.01,0.01]);
load('side_left', [0, 0, -0.5], 1, [0.01, 0.01, 0.01]);
load('side_right', [-3.5, 0, 0], 2, [0.01, 0.01, 0.01]);
load('back_plate', [-6.75, 0, 1], 3, [0.01, 0.01, 0.01]);
load('top', [0, 0, 3], 4, [0.01, 0.01, 0.01]);
holder.matrixAutoUpdate = false;
holder.updateMatrix();

function load(name, pos, ind,scale) {

    var path = 'models/obj/';
    var mtlloader = new THREE.MTLLoader();
    var objloader = new THREE.OBJLoader();
    objloader.setPath(path);
    mtlloader.setPath(path);
    mtlloader.load(name + '.mtl', function (materials) {
        materials.preload();
        objloader.setMaterials(materials);
        objloader.load(name + '.obj', function (object) {
            object.scale.set(scale[0],scale[1],scale[2]);
            object.position.set(pos[0], pos[1], pos[2]);
            object.rotation.set(0, 0, 0);
            furObjects[ind] = {
                obj: object,
                goalPos: [pos[0], pos[1], pos[2]],
                goalRot: [0, 0, 0],
                getRot: function () {
                    return [object.rotation.x, object.rotation.y, object.rotation.z];
                },
                setRot: function (nRot) {
                    object.rotation.set(nRot[0], nRot[1], nRot[2]);
                },
                getPos: function () {
                    return [object.position.x, object.position.y, object.position.z];
                },
                setPos: function (nPos) {
                    object.position.set(nPos[0], nPos[1], nPos[2]);
                }

            };
            holder.add(object);
        });
    });
}