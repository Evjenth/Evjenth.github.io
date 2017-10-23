var holder = new THREE.Object3D();

var paint = [];
var screws = [];
var drawer1 = [];
var screws = [];
var backs = [];
var objects = [];
var holderObjects = new THREE.Object3D();
var holderDrawer1 = new THREE.Object3D();
var holderBackSection = new THREE.Object3D();

var holderScrews = new THREE.Object3D();
//holder.scale.set(0.01, 0.01, 0.01);
holder.position.set(0, 0, 0);


load('paint', [10, 10, -20], 0, [1, 1, 1], [Math.PI, 0, 0]);
load('micke_drawer_front_panel', [0, 0, 0], 0, [0.01, 0.01, 0.01], [Math.PI, 0, 0]);
load('micke_drawer_side_panel_left', [0, 0.2, 1.5], 1, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
load('micke_drawer_side_panel_left', [3.6, 0.2, 1.5], 2, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
load('micke_drawer_bottom_plate', [0, 0.2, 3], 3, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
load('micke_drawer_back_panel', [6.6, 0, 6.2], 4, [0.01, 0.01, 0.01], [Math.PI / 2, Math.PI, 0]);
load('drawer_rail_left', [-1, 0.2, 6.2], 5, [0.01, 0.01, 0.01], [Math.PI / 2, Math.PI / 2, Math.PI]);
load('drawer_rail_right', [-0.5, 0.2, 6.2], 6, [0.01, 0.01, 0.01], [Math.PI / 2, Math.PI / 2, Math.PI]);

load('118331', [-0.5, 0.1, 0], 7, [0.01, 0.01, 0.01], [0, 0, 0]);
load('118331', [-0.5, 0.1, 0.2], 8, [0.01, 0.01, 0.01], [0, 0, 0]);
load('101344', [-0.5, 0.1, 0.3], 9, [0.01, 0.01, 0.01], [0, 0, 0]);
load('101344', [-0.6, 0.1, 0.3], 10, [0.01, 0.01, 0.01], [0, 0, 0]);
load('103114', [-0.6, 0.1, 1], 11, [0.01, 0.01, 0.01], [0, 0, 0]);
load('103114', [-0.6, 0.1, 1.2], 12, [0.01, 0.01, 0.01], [0, 0, 0]);
load('110519', [-0.6, 0.1, 2], 13, [0.01, 0.01, 0.01], [0, 0, 0]);
load('110519', [7, 0.1, 2], 14, [0.01, 0.01, 0.01], [0, 0, 0]);
load('100365', [-0.2, 0, 4], 15, [0.01, 0.01, 0.01], [0, 0, 0]);
load('100365', [7.0, 0, 4], 16, [0.01, 0.01, 0.01], [0, 0, 0]);






function load(name, pos, ind, scale, rot) {
    if (objects[ind] != undefined) {
        console.log("object alreay exists: " + ind);
        return;
    }
    var path = 'models/obj/';
    var mtlloader = new THREE.MTLLoader();
    var objloader = new THREE.OBJLoader();
    objloader.setPath(path);
    mtlloader.setPath(path);
    mtlloader.load(name + '.mtl', function (materials) {
        materials.preload();
        objloader.setMaterials(materials);
        objloader.load(name + '.obj', function (object) {
            object.scale.set(scale[0], scale[1], scale[2]);
            object.position.set(pos[0], pos[1], pos[2]);
            object.rotation.set(rot[0], rot[1], rot[2]);
            objects[ind] = {
                obj: object,
                goalPos: [pos[0], pos[1], pos[2]],
                goalRot: [rot[0], rot[1], rot[2]],
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
            holderObjects.add(object);

        });
    });
}


function shelfTick() {
    for (var i = 0; i < objects.length; i++) {
        var needsUpdate = false;
        for (var a = 0; a < 3; a++) {
            if (objects[i].goalPos[a] != objects[i].getPos()[a] || objects[i].goalRot[a] != objects[i].getRot()[a]) {
                needsUpdate = true;
                break;
            }
        }
        if (needsUpdate) {
            var newPos = objects[i].getPos().slice();
            var newRot = objects[i].getRot().slice();
            for (var dim = 0; dim < 3; dim++) {

                newPos[dim] += 0.1 * Math.sign(objects[i].goalPos[dim] - objects[i].getPos()[dim]);
                newRot[dim] += (Math.sign(objects[i].goalRot[dim] - objects[i].getRot()[dim]) / 10);
                if (Math.abs(newPos[dim] - objects[i].goalPos[dim]) < 0.2) {
                    newPos[dim] = objects[i].goalPos[dim];
                }
                if (Math.abs(newRot[dim] - objects[i].goalRot[dim]) < 0.2) {
                    newRot[dim] = objects[i].goalRot[dim];
                }
            }
            objects[i].setPos(newPos);
            objects[i].setRot(newRot);
        }
    }

}