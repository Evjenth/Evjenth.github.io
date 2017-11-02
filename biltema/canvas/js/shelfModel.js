var holder = new THREE.Object3D();

var shelfPiece = [];
//holder.scale.set(0.01, 0.01, 0.01);
holder.position.set(0, 0, 0);


//                               THIS ARRAY IS THE SCALES (X,Y,Z(Y is up)).
load('bottom', [-1.5, 3, 1.5], 0, [0.01, 0.01, 0.01],[0,0,0]);
load('side_left', [-1.5, 6.0, 1.5], 1, [0.01, 0.01, 0.01], [0, 0, - Math.PI / 2]);
load('side_right', [1.5, 6.0, 1.5], 2, [0.01, 0.01, 0.01], [0, Math.PI, -Math.PI/2]);
load('back_plate', [-1.37, 3.15, -1.4], 3, [0.01, 0.01, 0.01], [Math.PI/2, 0, 0]);
load('top', [1.5, 6.15, 1.5], 4, [0.01, 0.01, 0.01], [0, 0, Math.PI]);

function load(name, pos, ind, scale,rot) {

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
            object.rotation.set(rot[0],rot[1],rot[2]);
            shelfPiece[ind] = {
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
            holder.add(object);
        });
    });
}

function shelfTick() {
    for (var i = 0; i < shelfPiece.length; i++) {
        var needsUpdate = false;
        for (var a = 0; a < 3; a++) {
            if (shelfPiece[i].goalPos[a] != shelfPiece[i].getPos()[a] || shelfPiece[i].goalRot[a] != shelfPiece[i].getRot()[a]) {
                needsUpdate = true;
                break;
            }
        }
        if (needsUpdate) {
            var newPos = shelfPiece[i].getPos().slice();
            var newRot = shelfPiece[i].getRot().slice();
            for (var dim = 0; dim < 3; dim++) {

                newPos[dim] += 0.1 * Math.sign(shelfPiece[i].goalPos[dim] - shelfPiece[i].getPos()[dim]);
                newRot[dim] += (Math.sign(shelfPiece[i].goalRot[dim] - shelfPiece[i].getRot()[dim]) / 10);
                if (Math.abs(newPos[dim] - shelfPiece[i].goalPos[dim]) < 0.2) {
                    newPos[dim] = shelfPiece[i].goalPos[dim];
                }
                if (Math.abs(newRot[dim] - shelfPiece[i].goalRot[dim]) < 0.2) {
                    newRot[dim] = shelfPiece[i].goalRot[dim];
                }
            }
            shelfPiece[i].setPos(newPos);
            shelfPiece[i].setRot(newRot);
        }
    }
}