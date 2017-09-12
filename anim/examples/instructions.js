var count = 0;

document.onkeydown = function (key) { reactKey(key); }


function reactKey(key) {
    piece(key.keyCode);
}

function piece(evt) {
    var val = evt == 68 ? 1 : evt == 65 ? -1 : 0;
    
    if (val == 0 || count + val > 17 || count + val < 0) {
        return;
    }
    count += val;
    switch (count) {
        case 0:
            shelfPiece[0].goalPos = [-350/100, 0, -50/100];
            break;
        case 1:
            shelfPiece[0].goalPos = [-350/100, 0, -500/100];
            shelfPiece[1].goalPos = [0, 0, -50/100];
            writeText("Place the bottom plate on a clean surface (or a carpet).");
            break;
        case 2:
            shelfPiece[1].goalPos = [-350/100, 350/100, -480/100];
            shelfPiece[1].goalRot = [0, 0, 0];
            writeText("Identify the left side and place it over the bottom plate.");
            break;
        case 3:
            shelfPiece[1].goalRot = [0, 0, -Math.PI / 2];
            shelfPiece[1].goalPos = [-350/100, 350/100, -480/100];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 4:
            shelfPiece[1].goalPos = [-350/100, 300/100, -480/100];
            writeText("Lower the side plate on to the bottom plate.");
            break;
        case 5:
            shelfPiece[1].goalPos = [-350/100, 300/100, -500/100];
            shelfPiece[2].goalPos = [-350/100, 0, 0];
            writeText("Push the plate towards the back, such that the latch screws locks up.");
            break;
        case 6:
            shelfPiece[2].goalPos = [-50/100, 380/100, -480/100];
            shelfPiece[2].goalRot = [0, 0, 0];
            writeText("Identify the right side, and place it over the bottom plate.");
            break;
        case 7:
            shelfPiece[2].goalRot = [0, Math.PI, 0];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 8:
            shelfPiece[2].goalRot = [0, Math.PI, -Math.PI / 2];
            shelfPiece[2].goalPos = [-50/100, 380/100, -480/100];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 9:
            shelfPiece[2].goalPos = [-50/100, 300/100, -480/100];
            writeText("Lower the side plate on to the bottom plate.");
            break;
        case 10:
            shelfPiece[2].goalPos = [-50/100, 300/100, -500/100];
            shelfPiece[3].goalPos = [-675/100, 0, 100/100];
            writeText("Push the plate towards the back, such that the latch screws locks up.");
            break;
        case 11:
            shelfPiece[3].goalPos = [-335/100, 400/100, -790/100];
            shelfPiece[3].goalRot = [0, 0, 0];
            writeText("Locate the back plate and place over the side plates.");
            break;
        case 12:
            shelfPiece[3].goalRot = [Math.PI / 2, 0, 0];
            shelfPiece[3].goalPos = [-335/100, 400/100, -790/100];
            writeText("Orient it, such that the rough side is pointed towards the back.");
            break;
        case 13:
            shelfPiece[3].goalPos = [-335/100, 14/100, -790/100];
            shelfPiece[4].goalPos = [0, 0, 300/100];
            writeText("Lower it down into the tracks. It should be in contact "
                    +"with both the left, right and bottom plate, "
                    +"and pertrude a little over the top.");
            break;
        case 14:
            shelfPiece[4].goalPos = [0, 400/100, 300/100];
            shelfPiece[4].goalRot = [0, 0, 0];
            writeText("Place the top plate above the other items.");
            break;
        case 15:
            shelfPiece[4].goalRot = [0, 0, Math.PI];
            shelfPiece[4].goalPos = [0, 4, 3];
            writeText("Orient it, such that the traces matches up with the back plate.");
            break;
        case 16:
            shelfPiece[4].goalPos = [-50/100, 400/100, -500/100];
            writeText("Orient it, such that the traces matches up with the back plate.");
            break;
        case 17:
            shelfPiece[4].goalPos = [-50/100, 318/100, -500/100];
            writeText("Lower the top plate down on the shelf.")
            break;
    }
}
function writeText(message) {
    document.getElementById("instruction").innerHTML = message;
}