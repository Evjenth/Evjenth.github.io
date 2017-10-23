var count = -1;

document.onkeydown = function (key) { reactKey(key); }


function reactKey(key) {
    piece(key.keyCode);
}

function piece(evt) {
    var val = evt == 68 ? 1 : evt == 65 ? -1 : 0;
    

    if (val == 0 || count + val > 18 || count + val < -1) {
        return;
    }
    if ((count == -1 && val == 1) || (count == 18 && val == -1)) {
        holder.rotation.set(0, 0, 0);
    }
    count += val;
    switch (count) {
        case -1:
            shelfPiece[0].goalPos = [-1.5, 3, 1.5];
            shelfPiece[1].goalPos = [-1.5, 6.0, 1.5];
            shelfPiece[2].goalPos = [1.5, 6.0, 1.5];
            shelfPiece[3].goalPos = [-1.37, 3.15, -1.4];
            shelfPiece[4].goalPos = [1.5, 6.15, 1.5];
            shelfPiece[0].goalRot = [0, 0, 0];
            shelfPiece[1].goalRot = [0, 0, - Math.PI / 2];
            shelfPiece[2].goalRot = [0, Math.PI, -Math.PI / 2];
            shelfPiece[3].goalRot = [Math.PI / 2, 0, 0];
            shelfPiece[4].goalRot = [0, 0, Math.PI];
            holder.position.set(0, 0, 0);
            break;
        case 0:
            shelfPiece[0].goalPos = [-1.5, 0, -0.5];
            shelfPiece[1].goalPos = [2, 0.0, -0.5];
            shelfPiece[2].goalPos = [-1.5, 0.0, 0];
            shelfPiece[3].goalPos = [-4.75, 0, 1];
            shelfPiece[4].goalPos = [2, 0, 3.0];
            shelfPiece[0].goalRot = [0, 0, 0];
            shelfPiece[1].goalRot = [0, 0, 0];
            shelfPiece[2].goalRot = [0, 0, 0];
            shelfPiece[3].goalRot = [0, 0, 0];
            shelfPiece[4].goalRot = [0, 0, 0];
            holder.position.set(0, 0, 5);
            break;
        case 1:
            shelfPiece[0].goalPos = [-1.5, 0, -500 / 100];
            shelfPiece[1].goalPos = [2, 0, -50 / 100];
            writeText("Place the bottom plate on a clean surface (or a carpet).");
            break;
        case 2:
            shelfPiece[1].goalPos = [-1.5, 350 / 100, -480 / 100];
            shelfPiece[1].goalRot = [0, 0, 0];
            writeText("Identify the left side and place it over the bottom plate.");
            break;
        case 3:
            shelfPiece[1].goalRot = [0, 0, -Math.PI / 2];
            shelfPiece[1].goalPos = [-1.5, 350 / 100, -480 / 100];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 4:
            shelfPiece[1].goalPos = [-1.5, 300 / 100, -480 / 100];
            writeText("Lower the side plate on to the bottom plate.");
            break;
        case 5:
            shelfPiece[1].goalPos = [-1.5, 300 / 100, -500 / 100];
            shelfPiece[2].goalPos = [-1.5, 0, 0];
            writeText("Push the plate towards the back, such that the latch screws locks up.");
            break;
        case 6:
            shelfPiece[2].goalPos = [1.5, 380 / 100, -480 / 100];
            shelfPiece[2].goalRot = [0, 0, 0];
            writeText("Identify the right side, and place it over the bottom plate.");
            break;
        case 7:
            shelfPiece[2].goalRot = [0, Math.PI, 0];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 8:
            shelfPiece[2].goalRot = [0, Math.PI, -Math.PI / 2];
            shelfPiece[2].goalPos = [1.5, 380 / 100, -480 / 100];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 9:
            shelfPiece[2].goalPos = [1.5, 300 / 100, -480 / 100];
            writeText("Lower the side plate on to the bottom plate.");
            break;
        case 10:
            shelfPiece[2].goalPos = [1.5, 300 / 100, -500 / 100];
            shelfPiece[3].goalPos = [-4.75, 0, 100 / 100];
            writeText("Push the plate towards the back, such that the latch screws locks up.");
            break;
        case 11:
            shelfPiece[3].goalPos = [-1.37, 400 / 100, -790 / 100];
            shelfPiece[3].goalRot = [0, 0, 0];
            writeText("Locate the back plate and place over the side plates.");
            break;
        case 12:
            shelfPiece[3].goalRot = [Math.PI / 2, 0, 0];
            shelfPiece[3].goalPos = [-1.37, 400 / 100, -790 / 100];
            writeText("Orient it, such that the rough side is pointed towards the back.");
            break;
        case 13:
            shelfPiece[3].goalPos = [-1.37, 14 / 100, -790 / 100];
            shelfPiece[4].goalPos = [2, 0, 300 / 100];
            writeText("Lower it down into the tracks. It should be in contact "
                + "with both the left, right and bottom plate, "
                + "and pertrude a little over the top.");
            break;
        case 14:
            shelfPiece[4].goalPos = [2, 400 / 100, 300 / 100];
            shelfPiece[4].goalRot = [0, 0, 0];
            writeText("Place the top plate above the other items.");
            break;
        case 15:
            shelfPiece[4].goalRot = [0, 0, Math.PI];
            shelfPiece[4].goalPos = [2, 4, 3];
            writeText("Orient it, such that the traces matches up with the back plate.");
            break;
        case 16:
            shelfPiece[4].goalPos = [1.5, 4, -5];
            break;
        case 17:
            shelfPiece[0].goalPos = [-1.5, 0, -500 / 100];
            shelfPiece[1].goalPos = [-1.5, 300 / 100, -500 / 100];
            shelfPiece[2].goalPos = [1.5, 300 / 100, -500 / 100];
            shelfPiece[3].goalPos = [-1.37, 14 / 100, -790 / 100];
            shelfPiece[4].goalPos = [1.5, 318 / 100, -500 / 100];
            writeText("Lower the top plate down on the shelf.")
            holder.scale.set(1, 1, 1);
            break;
        case 18:
            shelfPiece[0].goalPos = [-1.5, 3, 1.5];
            shelfPiece[1].goalPos = [-1.5, 6.0, 1.5];
            shelfPiece[2].goalPos = [1.5, 6.0, 1.5];
            shelfPiece[3].goalPos = [-1.37, 3.15, -1.4];
            shelfPiece[4].goalPos = [1.5, 6.15, 1.5];
            shelfPiece[0].goalRot = [0, 0, 0];
            shelfPiece[1].goalRot = [0, 0, - Math.PI / 2];
            shelfPiece[2].goalRot = [0, Math.PI, -Math.PI / 2];
            shelfPiece[3].goalRot = [Math.PI / 2, 0, 0];
            shelfPiece[4].goalRot = [0, 0, Math.PI];
            holder.scale.set(1.5, 1.5, 1.5);
            break;
    }
}
function writeText(message) {
    document.getElementById("instruction").innerHTML = message;
}