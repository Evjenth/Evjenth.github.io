var holder = new THREE.Object3D();
var furObjects = [];
holder.scale.set(0.01, 0.01, 0.01);
holder.position.set(0,0,5);

load('bottom', [-350, 0, -50]);
load('side_left', [0, 0, -50]);
load('side_right', [-350, 0, 0]);
load('back_plate', [-675, 0, 100]);
load('top', [0, 0, 300]);

function load(name, pos) {
    var path = 'models/obj/';
    var mtlloader = new THREE.MTLLoader();
    var objloader = new THREE.OBJLoader();
    objloader.setPath(path);
    mtlloader.setPath(path);
    mtlloader.load(name + '.mtl', function (materials) {
        materials.preload();
        objloader.load(name + '.obj', function (object) {
            object.position.set(pos[0], pos[1], pos[2]);
            object.rotation.set(0,0,0);
            furObjects[furObjects.length] = {
                obj: object,
                goalPos: [pos[0],pos[1],pos[2]],
                goalRot: [0,0,0],
                getRot: function(){
                    return [object.rotation.x,object.rotation.y,object.rotation.z];
                },
                setRot: function(nRot){
                    object.rotation.set(nRot[0],nRot[1],nRot[2]);
                },
                getPos: function () {
                    return [object.position.x, object.position.y, object.position.z];
                },
                setPos : function(nPos){
                    object.position.set(nPos[0],nPos[1],nPos[2]);
                }
                
            };
            holder.add(object);
        });
    });
}