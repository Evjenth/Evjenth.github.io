var holder = new THREE.Object3D();

var shelfPiece = [];

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var flag6 = false;
//holder.scale.set(0.01, 0.01, 0.01);
holder.position.set(0, 0, 0);



//                               THIS ARRAY IS THE SCALES (X,Y,Z(Y is up)).
load('table', [0, -0.1, 0], 0, [2, 2, 2], [0, 0, 0]);
var def_scale = [0.005, 0.005, 0.005];
load('eske_bunn', [0, 3, 0], 1,def_scale, [-Math.PI / 2, 0, 0]);





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
    if (frames > 100 && !flag1) {
        console.log("fire");
        load('eskeplastikkbunn', [0, 6, 0], 2, [0.0049,0.0049,0.0049], [-Math.PI / 2, 0, 0]);
        flag1 = true;
    } else if (frames > 200 && !flag2) {
        shelfPiece[2].goalPos = [0, 3.01, 0];
        flag2 = true;
    } else if (frames > 300 && !flag3) {
        //load('eske_plastikk_topp', [0, 3.5, 0], 3, def_scale, [Math.PI / 2, 0, 0]);
        load('eske_plastikk_topp', [0, 6, 0], 3, def_scale, [Math.PI / 2, 0, 0]);
        flag3 = true;
    } else if (frames > 400 && !flag4) {
        shelfPiece[3].goalPos = [0, 3.5, 0];
        flag4 = true;
    } else if (frames > 500 && !flag5) {
        //load('eske_topp', [0, 3.6, 0], 4, def_scale, [Math.PI / 2, 0, 0]);
        load('eske_topp', [0, 6, 0], 4, def_scale, [Math.PI / 2, 0, 0]);
        flag5 = true;
    } else if (frames > 600 && !flag6) {
        shelfPiece[4].goalPos = [0, 3.6, 0];
        flag6 = true;
    }

}