// JavaScript source code
function nextPiece() {
    pieceCount++;
    switch (pieceCount) {
        case 1:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('bottom.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('bottom.obj', function (object) {
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.position.x = 0;
                    object.position.y = 0;
                    object.position.z = 0;
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.receiveShadow = true; } });
                    objects[0] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0, 0, 0], frames: 100, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    scene.add(objects[0].geometry);


                });

            });
            break;
        case 2:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('side_left.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('side_left.obj', function (object1) {
                    object1.rotation.z = 3 * Math.PI / 2;
                    //object1.rotation.x = Math.PI;
                    object1.scale.x = 0.01;
                    object1.scale.y = 0.01;
                    object1.scale.z = 0.01;

                    object1.position.x = -3;
                    object1.position.y = 3;
                    object1.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; node.receiveShadow = true; } });
                    objects[1] = { geometry: object1, startpos: [object1.position.x, object1.position.y, object1.position.z], endpos: [0, 3, 0], frames: 100, frameCount: 0 };
                    objects[1].geometry.castShadow = true;
                    scene.add(objects[1].geometry);
                });
            });
            break;
        case 3:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('side_right.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('side_right.obj', function (object2) {
                    object2.rotation.z = Math.PI / 2;
                    object2.rotation.x = Math.PI;
                    object2.scale.x = 0.01;
                    object2.scale.y = 0.01;
                    object2.scale.z = 0.01;
                    object2.position.y = 3;
                    object2.position.x = 5;
                    object2.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; receiveShadow = true; } });
                    objects[2] = { geometry: object2, startpos: [object2.position.x, object2.position.y, object2.position.z], endpos: [3, 3, 0], frames: 100, frameCount: 0 };
                    scene.add(objects[2].geometry);

                });
            });
            break;
        case 4:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('back_plate.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('back_plate.obj', function (object) {
                    object.rotation.x = Math.PI / 2;
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.position.set(0.13,4, -2.9);
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; receiveShadow = true; } });
                    //object.position.y = 1.45;
                    objects[3] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0.13,0.13,-2.9], frames: 100, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    objects[0].geometry.receiveShadow = true;
                    objects[0].needsUpdate = true;
                    scene.add(objects[3].geometry);
                });
            });
            break;
        case 5:
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('models/obj/');
            mtlLoader.load('top.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('models/obj/');
                objLoader.load('top.obj', function (object) {
                    object.rotation.x = Math.PI;
                    object.rotation.y = Math.PI;
                    object.scale.x = 0.01;
                    object.scale.y = 0.01;
                    object.scale.z = 0.01;
                    object.position.set(3, 5, 0);
                    object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; receiveShadow = true; } });
                    //object.position.y = 1.45;
                    objects[4] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [3,3.18,0], frames: 100, frameCount: 0 };
                    objects[0].geometry.castShadow = true;
                    objects[0].geometry.receiveShadow = true;
                    objects[0].needsUpdate = true;
                    scene.add(objects[4].geometry);
                });
            });
            break;
    }
}