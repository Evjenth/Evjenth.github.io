// JavaScript source code
var scale = 0.01;
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
					objects[0] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [0, 0, 0], frames: 0, frameCount: 0 };
					objects[0].geometry.castShadow = true;
					scene.add(objects[0].geometry);
					document.getElementById("instruction").innerHTML = instructions[0];

				});

			});
			break;

		case 2:
			myLoad(2,'latch_screw', [0,0,Math.PI/4], [-1,1,-2.5],[0.12,0.07,-2.5],50,false,false);
			myLoad(3,'latch_screw', [0,0,Math.PI/4], [-1,1,-1.6],[0.12,0.07,-1.6],50,false,false);
			myLoad(4,'latch_screw', [0,0,Math.PI/4], [-1,1,-0.7],[0.12,0.07,-0.7],50,false,false);
			myLoad(5,'latch_screw', [0,0,-Math.PI/4], [4,1,-2.5],[2.88,0.07,-2.5],50,false,false);
			myLoad(6,'latch_screw', [0,0,-Math.PI/4], [4,1,-1.6],[2.88,0.07,-1.6],50,false,false);
			myLoad(7,'latch_screw', [0,0,-Math.PI/4], [4,1,-0.7],[2.88,0.07,-0.7],50,false,false);
			document.getElementById("instruction").innerHTML = instructions[1];
			pieceCount = 7;
			break;

		case 8:
			myLoad(pieceCount,'side_left',[0,0,3*Math.PI / 2],[0,4,0.07],[0,3,0.07],50,true,true,[0,3,0],50);
			document.getElementById("instruction").innerHTML = instructions[2];
			break;
		case 9:
			myLoad(pieceCount,'side_right',[Math.PI,0,Math.PI / 2],[3,4,0.07],[3,3,0.07],50,true,true,[3,3,0],50);

			break;
		case 10:
			myLoad(pieceCount,'back_plate',[Math.PI/2,0,0],[0.13,3,-2.9],[0.13,0.13,-2.9],50,true,true);
			document.getElementById("instruction").innerHTML = instructions[3];
			break;
		case 11:
			myLoad(pieceCount,'top',[0,0,0],[6,0,0],[6,0,0],0,true,true);
			document.getElementById("instruction").innerHTML = instructions[4];
			break;
		case 12:
			//myLoad(pieceCount,'long_screw',[Math.PI / 2,0,0],[9,100,-30],[9,46,-30],100,true,true,[0,0,0],0);
			//myLoad(pieceCount+1,'long_screw',[(Math.PI / 2),0,0],[9,100,-90],[9,46,-90],100,true,true,[0,0,0],0,2);
			var name = 'long_screw';
			var rotations = [Math.PI / 2,0,0];
			var startPos = [9,100,-30];
			var endPos = [9,46,-30];
			var piece = pieceCount;
			var mFrames = 100;
			var screws = [];
			var mtlLoader = new THREE.MTLLoader();
				mtlLoader.setPath('models/obj/');
				mtlLoader.load(name + '.mtl', function(materials){
					materials.preload();
					var objLoader = new THREE.OBJLoader();
					objLoader.setMaterials(materials);
					objLoader.setPath('models/obj/');
					objLoader.load(name + '.obj',function(object){
						 object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; receiveShadow =true; } });
						
						//object.scale.set(scale,scale,scale);
						
						object.rotation.set(rotations[0],rotations[1],rotations[2]);
						object.position.set(startPos[0],startPos[1],startPos[2]);
						//objects[piece-1] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [endPos[0],endPos[1],endPos[2]], frames: mFrames, frameCount: 0 ,secondFrames:0};
						//objects[piece-2].geometry.add(objects[piece-1].geometry);

						var screws = [];
						for(var a = 0 ; a < 4 ; a++){
							screws[a] = object.clone();
						}
						screws[0].position.set(9,46,-30);
						screws[1].position.set(9,46,-250);
						screws[2].position.set(291,46,-250);
						screws[3].position.set(291,46,-30);

						for(var a = 0 ; a < 4 ; a++){
							objects[piece-2].geometry.add(screws[a]);
						}
						
					});
				});
			break;
		case 13:
			var object = objects[10].geometry;
			scene.remove(objects[10].geometry);
			scene.add(object);
			objects[pieceCount-1] = {geometry:object,startpos:[object.position.x,object.position.y,object.position.z],endpos:[6,4,0],frames:50,frameCount:0,secondFrames:0};
			objects[pieceCount-1].startRotation = [0,0,0];
			objects[pieceCount-1].endRotation = [-Math.PI,-Math.PI,0];
			objects[pieceCount-1].interPos = [3,4,0];
			objects[pieceCount-1].secondFrames = 50;
			document.getElementById("instruction").innerHTML = instructions[5];
			break;
		case 14:
			objects[pieceCount-2].frameCount = 0;
			objects[pieceCount-2].startPos = objects[pieceCount-2].endpos;
			objects[pieceCount-2].endPos = objects[pieceCount-2].startPos;
			objects[pieceCount-2].endpos[1] = -0.85;
			delete objects[pieceCount-2].secondFrames;
			delete objects[pieceCount-2].interPos;
			delete objects[pieceCount-2].startRotation;
			delete objects[pieceCount-2].endRotation;
			document.getElementById("instruction").innerHTML = instructions[6];
			break;	
		default:
			pieceCount--;
			break;
	}
	
}

function myLoad(piece,name,rotations,startPos,endPos,mFrames,castS, receiveS,interMediate,extraF){
				
				var mtlLoader = new THREE.MTLLoader();
				mtlLoader.setPath('models/obj/');
				mtlLoader.load(name + '.mtl', function(materials){
					materials.preload();
					var objLoader = new THREE.OBJLoader();
					objLoader.setMaterials(materials);
					objLoader.setPath('models/obj/');
					objLoader.load(name + '.obj',function(object){
						 object.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; receiveShadow =true; } });
						
						object.scale.set(scale,scale,scale);
						
						object.rotation.set(rotations[0],rotations[1],rotations[2]);
						object.position.set(startPos[0],startPos[1],startPos[2]);
						objects[piece-1] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [endPos[0],endPos[1],endPos[2]], frames: mFrames, frameCount: 0 ,secondFrames:0};
						
						scene.add(objects[piece-1].geometry);
						
						if(interMediate != undefined){
							objects[piece-1].interPos = interMediate;
							objects[piece-1].secondFrames = extraF;
						}
					});
				});
			}