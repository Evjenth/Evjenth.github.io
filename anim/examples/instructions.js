
function piece(evt) {
    var val = 0;
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        val = 1;
    } else if (evt.keyCode == 65 || evt.keyCode == 37) {
        val = -1;
    }else{
        return;
    }
    count += val;
    console.log(count);
    switch (count) {
        case 0:
            furObjects[0].goalPos = [-350, 0, -50];
            break;
        case 1:
            furObjects[0].goalPos = [-350, 0, -500];
            furObjects[1].goalPos = [0, 0, -50];
            writeText("Place the bottom plate on a clean surface (or a carpet).");
            break;
        case 2:
            furObjects[1].goalPos = [-350, 350, -480];
            furObjects[1].goalRot = [0, 0, 0];
            writeText("Identify the left side and place it over the bottom plate.");
            break;
        case 3:
            furObjects[1].goalRot = [0, 0, -Math.PI / 2];
            furObjects[1].goalPos = [-350, 350, -480];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 4:
            furObjects[1].goalPos = [-350, 300, -480];
            writeText("Lower the side plate on to the bottom plate.");
            break;
        case 5:
            furObjects[1].goalPos = [-350, 300, -500];
            furObjects[2].goalPos = [-350, 0, 0];
            writeText("Push the plate towards the back, such that the latch screws locks up.");
            break;
        case 6:
            furObjects[2].goalPos = [-50, 380, -480];
            furObjects[2].goalRot = [0, 0, 0];
            writeText("Identify the right side, and place it over the bottom plate.");
            break;
        case 7:
            furObjects[2].goalRot = [0, Math.PI, 0];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 8:
            furObjects[2].goalRot = [0, Math.PI, -Math.PI / 2];
            furObjects[2].goalPos = [-50, 380, -480];
            writeText("Orient it, such that the tracks match up.");
            break;
        case 9:
            furObjects[2].goalPos = [-50, 300, -480];
            writeText("Lower the side plate on to the bottom plate.");
            break;
        case 10:
            furObjects[2].goalPos = [-50, 300, -500];
            furObjects[3].goalPos = [-675, 0, 100];
            writeText("Push the plate towards the back, such that the latch screws locks up.");
            break;
        case 11:
            furObjects[3].goalPos = [-335, 400, -790];
            furObjects[3].goalRot = [0, 0, 0];
            writeText("Locate the back plate and place over the side plates.");
            break;
        case 12:
            furObjects[3].goalRot = [Math.PI / 2, 0, 0];
            furObjects[3].goalPos = [-335, 400, -790];
            writeText("Orient it, such that the rough side is pointed towards the back.");
            break;
        case 13:
            furObjects[3].goalPos = [-335, 14, -790];
            furObjects[4].goalPos = [0, 0, 300];
            writeText("Lower it down into the tracks. It should be in contact "
                    +"with both the left, right and bottom plate, "
                    +"and pertrude a little over the top.");
            break;
        case 14:
            furObjects[4].goalPos = [0, 400, 300];
            furObjects[4].goalRot = [0, 0, 0];
            writeText("Place the top plate above the other items.");
            break;
        case 15:
            furObjects[4].goalRot = [0, 0, Math.PI];
            furObjects[4].goalPos = [0, 400, 300];
            writeText("Orient it, such that the traces matches up with the back plate.");
            break;
        case 16:
            furObjects[4].goalPos = [-50, 400, -500];
            writeText("Orient it, such that the traces matches up with the back plate.");
            break;
        case 17:
            furObjects[4].goalPos = [-50, 318, -500];
            writeText("Lower the top plate down on the shelf.")
            break;

    }
}


