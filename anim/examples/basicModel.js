// JavaScript source code
function nextPiece() {
    pieceCount++;
    if (pieceCount == 5) {
        pieceCount = 4;
        return;
    }

    switch (pieceCount) {
        case 1:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object) {
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.position.x = -3;
                    object.position.y = 0;
                    object.position.z = 0;
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; node.receiveShadow = true; } });
                    objects[0] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0, 0, 0], frames: 50, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    scene.add(objects[0].geometry);


                });

            });
            break;
        case 2:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object1) {
                    object1.rotation.x = Math.PI / 2;
                    object1.scale.x = 0.01;
                    object1.scale.y = 0.01;
                    object1.scale.z = 0.01;

                    object1.position.z = 3;
                    object1.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
                    objects[1] = { geometry: object1, startpos: [object1.position.x, object1.position.y, object1.position.z], endpos: [0, 0, 0], frames: 50, frameCount: 0 };
                    objects[1].geometry.castShadow = true;
                    scene.add(objects[1].geometry);
                });
            });
            break;
        case 3:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object2) {
                    object2.rotation.x = Math.PI / 2;
                    object2.scale.x = 0.01;
                    object2.scale.y = 0.01;
                    object2.scale.z = 0.01;
                    object2.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
                    objects[2] = { geometry: object2, startpos: [object2.position.x, object2.position.y, object2.position.z], endpos: [0, 0, -1.55], frames: 50, frameCount: 0 };
                    scene.add(objects[2].geometry);

                });
            });
            break;
        case 4:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('square1.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('square1.obj', function (object) {
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
                    //object.position.y = 1.45;
                    objects[3] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0, 1.45, 0], frames: 50, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    objects[0].geometry.receiveShadow = true;
                    objects[0].needsUpdate = true;
                    scene.add(objects[3].geometry);
                });
            });
            break;
    }

}