var count = 0;
var temp = new THREE.Object3D();
var temp2 = new THREE.Object3D();
var finishedDrawer1 = new THREE.Object3D();
var finishedDrawer2 = new THREE.Object3D();
var mountedLongSide = new THREE.Object3D();
var mountedShortSide = new THREE.Object3D();

document.onkeydown = function (key) { reactKey(key); }


function reactKey(key) {
    piece(key.keyCode);
}

function piece(evt) {
    var val = evt == 68 ? 1 : evt == 65 ? -1 : 0;


    count += val;
    console.log(count);
    switch (count) {
        case 1:
            console.log("FIRE");
            objects[7].goalPos = [6.6, 0.4, 0.4];
            objects[8].goalPos = [0.1, 0.4, 0.4];
            objects[7].goalRot = [0, 0, -Math.PI / 2];
            objects[8].goalRot = [0, 0, -Math.PI / 2];
            writeText("Insert the objects (118331) into the holes (x2)");
            break;
        case 2:
            objects[7].goalPos = [6.6, 0.1, 0.4];
            objects[8].goalPos = [0.1, 0.1, 0.4];
            break;
        case 3:
            //wood dowels
            objects[9].goalPos = [0.1, 0.6, 0.2];
            objects[10].goalPos = [6.6, 0.6, 0.2];
            objects[9].goalRot = [Math.PI / 2, 0, 0];
            objects[10].goalRot = [Math.PI / 2, 0, 0];
            objects[1].goalPos = [0.2, 1, 1];
            objects[1].goalRot = [0, -Math.PI / 2, Math.PI / 2];
            objects[2].goalRot = [0, Math.PI / 2, Math.PI / 2];
            objects[2].goalPos = [6.5, 1, 0.1];
            break;
        case 4:
            objects[9].goalPos = [0.1, 0.2, 0.2];
            objects[10].goalPos = [6.6, 0.2, 0.2];
            objects[1].goalPos = [0.2, 0.1, 1];
            objects[2].goalPos = [6.5, 0.1, 0.1];
            break;
        case 5:
            objects[11].goalPos = [-0.2, 0.3, 0.55];
            objects[11].goalRot = [Math.PI, 0, Math.PI / 2];
            objects[12].goalPos = [6.8, 0.3, 0.55];
            objects[12].goalRot = [Math.PI, Math.PI, Math.PI / 2];
            break;
        case 6:
            objects[11].goalPos = [0.1, 0.3, 0.55];
            objects[12].goalPos = [6.6, 0.3, 0.55];
            break; 2
        case 7:
            temp.add(objects[0].obj);
            temp.add(objects[1].obj);
            temp.add(objects[2].obj);
            temp.add(objects[7].obj);
            temp.add(objects[8].obj);
            temp.add(objects[9].obj);
            temp.add(objects[10].obj);
            temp.add(objects[11].obj);
            temp.add(objects[12].obj);
            scene.remove(objects[7].obj);
            scene.remove(objects[8].obj);
            scene.remove(objects[9].obj);
            scene.remove(objects[10].obj);
            scene.remove(objects[11].obj);
            scene.remove(objects[12].obj);
            scene.remove(objects[0].obj);
            scene.remove(objects[1].obj);
            scene.remove(objects[2].obj);
            scene.add(temp);
            temp.rotation.set(Math.PI / 2, 0, 0);
            temp.position.set(0, 1, -1);
            break;
        case 8:
            objects[3].goalPos = [0, 0.95, -0.95];
            break;
        case 9:
            objects[4].goalRot = [0, Math.PI + 0.1, 0];
            objects[4].goalPos = [6.3, 0.0, 2.0];
            break;
        case 10:
            objects[4].goalPos = [6.6, 0.0, 2.0];
            break;
        case 11:
            objects[4].goalRot = [0, Math.PI, 0];
            objects[4].goalPos = [6.6, 0.0, 2];
            break;
        case 12:
            objects[13].goalPos = [-0.6, 0.45, 1.95];
            objects[14].goalPos = [7, 0.45, 1.95];
            objects[13].goalRot = [0, Math.PI / 2, 0];
            objects[14].goalRot = [0, -Math.PI / 2, 0];
            break;
        case 13:
            objects[13].goalPos = [0, 0.45, 1.95];
            objects[14].goalPos = [6.7, 0.45, 1.95];
            break;
        case 14:
            objects[5].goalRot = [-Math.PI / 2, -Math.PI / 2, 0];
            objects[6].goalRot = [-Math.PI / 2, -Math.PI / 2, 0];
            objects[5].goalPos = [0, 0.8, 1.7];
            objects[6].goalPos = [6.7, 0.8, 1.7];
            break;
        case 15:
            objects[15].goalPos = [-0.2, 0.9, 1.3];
            objects[15].goalRot = [0, Math.PI / 2, 0];
            objects[16].goalPos = [7.0, 0.9, 1.3];
            objects[16].goalRot = [0, -Math.PI / 2, 0];
            break;
        case 16:
            objects[15].goalPos = [-0.05, 0.9, 1.3];
            objects[16].goalPos = [6.73, 0.9, 1.3];
            break;
        case 17:
            temp2.add(objects[3].obj);
            temp2.add(objects[4].obj);
            temp2.add(objects[5].obj);
            temp2.add(objects[6].obj);
            scene.remove(objects[3].obj);
            scene.remove(objects[4].obj);
            scene.remove(objects[5].obj);
            scene.remove(objects[6].obj);

            temp2.add(objects[13].obj);
            temp2.add(objects[14].obj);
            temp2.add(objects[15].obj);
            temp2.add(objects[16].obj);

            scene.remove(objects[13].obj);
            scene.remove(objects[13].obj);
            scene.remove(objects[15].obj);
            scene.remove(objects[16].obj);
            scene.add(temp2);
            //temp.rotation.set(Math.PI,0,0);

            finishedDrawer1.add(temp);
            finishedDrawer1.add(temp2);
            finishedDrawer1.rotation.set(Math.PI, 0, 0);
            scene.add(finishedDrawer1);
            finishedDrawer1.position.set(0, 1, 0);
            count = 17;
            break;
        case 18:
            finishedDrawer2 = finishedDrawer1.clone();
            scene.add(finishedDrawer2);
            finishedDrawer2.position.set(-8, 1, 0);
            writeText("Build another duplicate of the drawer");
            break;
        case 19:
            finishedDrawer1.position.set(0, 1, -10);
            finishedDrawer2.position.set(-8, 1, -10);
            writeText("set them aside");
            break;
        case 20:

            load('101344', [-5.5, 0, -1], 17, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('101344', [-5.6, 0, -1], 18, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('101344', [-5.7, 0, -1], 19, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('101344', [-5.8, 0, -1], 20, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('micke_backplate_back', [-5, 0, 0], 21, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('micke_backplate_bottom', [-5, 0.15, 2], 22, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('micke_backplate_edge', [-5, 0.15, 4], 23, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('micke_backplate_splitter', [-5, 0.1, 6], 24, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('micke_metal_foot', [-9, 0, 5], 25, [0.01, 0.01, 0.01], [0, Math.PI / 2, 0]);
            load('micke_side_long', [-8, 0, 5], 26, [0.01, 0.01, 0.01], [0, Math.PI / 2, 0]);
            load('micke_side_short', [-7, 0, 5], 27, [0.01, 0.01, 0.01], [0, Math.PI / 2, 0]);
            scene.add(holderBackSection);
            break;
        case 21:
            objects[17].goalPos = [-3.0, 0.4, -1.85];
            objects[17].goalRot = [-Math.PI / 2, 0, 0];
            objects[18].goalPos = [-1, 0.4, -1.85];
            objects[18].goalRot = [-Math.PI / 2, 0, 0];
            objects[19].goalPos = [4.6, 0.4, -1.85];
            objects[19].goalRot = [-Math.PI / 2, 0, 0];
            objects[20].goalPos = [6.6, 0.4, -1.85];
            objects[20].goalRot = [-Math.PI / 2, 0, 0];
            objects[22].goalRot = [0, 0, 0];
            objects[22].goalPos = [-3.3, 1, -1.85];
            break;
        case 22:
            objects[17].goalPos = [-3.0, 0.2, -1.85];
            objects[17].goalRot = [-Math.PI / 2, 0, 0];
            objects[18].goalPos = [-1, 0.2, -1.85];
            objects[18].goalRot = [-Math.PI / 2, 0, 0];
            objects[19].goalPos = [4.6, 0.2, -1.85];
            objects[19].goalRot = [-Math.PI / 2, 0, 0];
            objects[20].goalPos = [6.6, 0.2, -1.85];
            objects[20].goalRot = [-Math.PI / 2, 0, 0];
            objects[22].goalRot = [0, 0, 0];
            objects[22].goalPos = [-3.3, 0.3, -1.85];
            break;
        case 23:
            load('101344', [-2.8, 2, -1.85], 28, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('101344', [-0.8, 2, -1.85], 29, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('101344', [4.2, 2, -1.85], 30, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            load('101344', [6.2, 2, -1.85], 31, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, 0]);
            objects[23].goalRot = [Math.PI / 2, 0, 0];
            objects[23].goalPos = [-4.2, 3, -2];
            break;
        case 24:
            objects[23].goalPos = [-4.2, 1.4, -2];
            objects[28].goalPos = [-2.8, 1.2, -1.85];
            objects[29].goalPos = [-0.8, 1.2, -1.85];
            objects[30].goalPos = [4.2, 1.2, -1.85];
            objects[31].goalPos = [6.2, 1.2, -1.85];
            load('118331', [1.8, 0.6, -0.8], 32, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            load('101344', [1.8, 0.6, -0.5], 33, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
            break;
        case 25:
            objects[24].goalRot = [Math.PI / 2, Math.PI / 2, 0];
            objects[24].goalPos = [1.8, 1, -1.4]
            break;
        case 26:
            objects[32].goalPos = [1.8, 0.3, -0.8];
            objects[33].goalPos = [1.8, 0.45, -0.5];
            objects[24].goalPos = [1.8, 0.31, -1.4];
            load('103430', [1.6, 0.62, -1.1], 34, [0.01, 0.01, 0.01], [0, 0, Math.PI / 2]);
            break;
        case 27:
            //objects[34].obj.scale.set(1,1,1);
            objects[34].goalPos = [1.8, 0.62, -1.1];
            break;
        case 28:
            objects[27].goalRot = [-Math.PI / 2, 0, 0];
            objects[27].goalPos = [0, .15, 4.8];
            objects[26].goalRot = [-Math.PI / 2, 0, 0];
            objects[26].goalPos = [-8, .15, 9];
            break;
        case 29:
            load('118331', [-7.85, 0.6, 3.7], 35, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            load('118331', [-7.85, 0.6, 2.9], 36, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            load('118331', [-7.85, 0.6, 2.1], 37, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);

            load('118331', [4.85, 0.6, 3.7], 38, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            load('118331', [4.85, 0.6, 2.9], 39, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            load('118331', [4.85, 0.6, 2.1], 40, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);

            load('118331', [-6.65, 0.6, 3.94], 41, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            load('118331', [3.65, 0.6, 3.94], 42, [0.01, 0.01, 0.01], [0, 0, -Math.PI / 2]);
            break;
        case 30:
            objects[35].goalPos = [-7.85, 0.3, 3.7];
            objects[36].goalPos = [-7.85, 0.3, 2.9];
            objects[37].goalPos = [-7.85, 0.3, 2.1];

            objects[38].goalPos = [4.85, 0.3, 3.7];
            objects[39].goalPos = [4.85, 0.3, 2.9];
            objects[40].goalPos = [4.85, 0.3, 2.1];

            objects[41].goalPos = [-6.65, 0.3, 3.94];
            objects[42].goalPos = [3.65, 0.3, 3.94];
            break;
        case 31:
            load('drawer_rail_left', [-3.8, 0.3, 2.7], 43, [0.01, 0.01, 0.01], [-Math.PI / 2, 0, Math.PI / 2]);
            load('drawer_rail_right', [0.8, 0.3, 2.7], 44, [0.01, 0.01, 0.01], [Math.PI / 2, 0, -Math.PI / 2]);
            load('100365', [-4.2, 0.7, 2.6], 45, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
            load('100365', [-6, 0.7, 2.6], 46, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
            load('100365', [1.2, 0.7, 2.6], 47, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
            load('100365', [3.0, 0.7, 2.6], 48, [0.01, 0.01, 0.01], [Math.PI / 2, 0, 0]);
            break;
        case 32:
            objects[45].goalPos = [-4.2, 0.36, 2.6];
            objects[46].goalPos = [-6, 0.36, 2.6];
            objects[47].goalPos = [1.2, 0.36, 2.6];
            objects[48].goalPos = [3.0, 0.36, 2.6];
            break;
        case 33:
            mountedLongSide.add(objects[43].obj);
            mountedLongSide.add(objects[26].obj)
            mountedLongSide.add(objects[35].obj);
            mountedLongSide.add(objects[36].obj);
            mountedLongSide.add(objects[37].obj);
            mountedLongSide.add(objects[41].obj);
            mountedLongSide.add(objects[45].obj);
            mountedLongSide.add(objects[46].obj);
            scene.add(mountedLongSide);
            mountedLongSide.rotation.set(0, -Math.PI, Math.PI / 2);
            mountedLongSide.position.set(-6, 8, 1.8);

            mountedShortSide.add(objects[44].obj);
            mountedShortSide.add(objects[27].obj);
            mountedShortSide.add(objects[38].obj);
            mountedShortSide.add(objects[39].obj);
            mountedShortSide.add(objects[40].obj);

            mountedShortSide.add(objects[47].obj);
            mountedShortSide.add(objects[42].obj);
            scene.add(mountedShortSide);
            mountedShortSide.rotation.set(0, -Math.PI, -Math.PI / 2);
            mountedShortSide.position.set(10, 5, 1.8);

            load('101344', [-5, 1.4, -1.6], 49, [0.01, 0.01, 0.01], [0, Math.PI / 2, 0]);
            load('101344', [8, 1.4, -1.6], 50, [0.01, 0.01, 0.01], [0, Math.PI / 2, 0]);
            break;

        case 34:
            objects[49].goalPos = [-4.5, 1.4, -1.6];
            objects[50].goalPos = [7.7, 1.4, -1.6];
            mountedLongSide.position.set(-5.3, 8, 1.8);
            mountedShortSide.position.set(8.9, 5, 1.8);
            break;

        case 35:
            load('101344', [-5.15, 0.9, 0.1], 51, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('101344', [8.75, 0.9, 0.1], 52, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('101344', [-5.15, 4.1, 0.1], 53, [0.01, 0.01, 0.01], [0, 0, 0]);
            load('101344', [8.75, 4.1, 0.1], 54, [0.01, 0.01, 0.01], [0, 0, 0]);
            break;

        case 36:
            load('micke_top_plate', [-5, 0, 8], 55, [0.01, 0.01, 0.01], [0, 0, 0]);
            break;
        case 37:
            objects[55].goalRot = [-Math.PI / 2, 0, 0];
            objects[55].goalPos = [-5.3, 5, 0.18];
            objects[51].goalPos = [-5.15, 0.9, -0.1];
            objects[52].goalPos = [8.75, 0.9, -0.1];
            objects[53].goalPos = [-5.15, 4.1, -0.1];
            objects[54].goalPos = [8.75, 4.1, -0.1];
            break;
        case 38:
            objects[25].goalRot = [0, Math.PI / 2, Math.PI / 2];
            objects[25].goalPos = [8.74, 0, -7.2];
            break;
        case 39:
            var finished = new THREE.Object3D();
            scene.remove(holderObjects);
            finished.add(mountedLongSide);
            finished.add(mountedShortSide);
            finished.add(objects[25].obj);
            finished.add(objects[55].obj);
            finished.add(objects[21].obj);
            finished.add(objects[22].obj);
            finished.add(objects[23].obj);
            finished.add(objects[24].obj);
            scene.add(finished);
            finished.rotation.set(-Math.PI / 2, 0, 0);
            finished.position.set(0, 7.2, 0);
            finishedDrawer1.position.set(1.7, 6.7, -4);
            finishedDrawer1.rotation.set(Math.PI, Math.PI, 0);
            finishedDrawer2.position.set(8.65, 6.7, -4);
            finishedDrawer2.rotation.set(Math.PI, Math.PI, 0);
    }
    updateCamera(count);
    //updateInstructions(count);
}
function writeText(message) {
    document.getElementById("instruction").innerHTML = message;
}