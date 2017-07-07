var holder = new THREE.Object3D();

holder.scale.set(0.01,0.01,0.01);
holder.position.set(5,0,5);

load('bottom',[-350,0,-50]);
load('side_left',[0,0,-50]);
load('side_right',[-350 ,0,0]);
load('top',[0,0,300]);
load('back_plate',[-675,0,100]);
function load(name,pos){
    var path = 'models/obj/';
    var mtlloader = new THREE.MTLLoader();
    var objloader = new THREE.OBJLoader();
    objloader.setPath(path);
    mtlloader.setPath(path);
    mtlloader.load(name + '.mtl',function(materials){
        materials.preload();
        objloader.load(name + '.obj',function(object){
            object.position.set(pos[0],pos[1],pos[2]);
            holder.add(object);
        });
    });
}