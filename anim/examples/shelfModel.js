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
					document.getElementById("instruction").innerHTML = "1. Place the bottom plate (id number #1441123) on the floor. The side with the traces should be turned upward. Use a carpet to prevent scratches";

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
			document.getElementById("instruction").innerHTML = "2. Insert the latch screws (x6)."
			pieceCount = 7;
			break;

		case 8:
			myLoad(pieceCount,'side_left',[0,0,3*Math.PI / 2],[-1,3,0],[0,3,0],50,true,true);
			document.getElementById("instruction").innerHTML = "3. Attach the side plates. Align the bigger holes at the bottom to the latch screws and push in the plate. Push to plate so that the screws locks into the plate with an audible *click*";
			break;
		case 9:
			myLoad(pieceCount,'side_right',[Math.PI,0,Math.PI / 2],[4,3,0],[3,3,0],50,true,true);

			break;
		case 10:
			myLoad(pieceCount,'back_plate',[Math.PI/2,0,0],[0.13,3,-2.9],[0.13,0.13,-2.9],50,true,true);
			break;
		case 11:
			myLoad(pieceCount,'top',[Math.PI,Math.PI,0],[3,4,0],[3,3.18,0],50,true,true);
			break;
		default:
			pieceCount--;
			break;
	}
	
}

function myLoad(piece,name,rotations,startPos,endPos,mFrames,castS, receiveS){
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
						objects[piece-1] = { geometry: object, startpos: [object.position.x, object.position.y, object.position.z], endpos: [endPos[0],endPos[1],endPos[2]], frames: mFrames, frameCount: 0 };
						scene.add(objects[piece-1].geometry);
					});
				});
			}