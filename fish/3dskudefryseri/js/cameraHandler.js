var flag = false;

document.addEventListener("mousedown", function () {
    flag = false;
});

function updateCamera(count) {

    switch (count) {
        case 1:
            flag = true;
            lookAtGoal = new THREE.Vector3(0, 0, 0);
            camera_goal_position = [0, 5, 5];
            break;
        case 2:
            camera_goal_position = [-5, 3, 5];
            break;
    }
    controls.target.set(lookAtGoal.x, lookAtGoal.y, lookAtGoal.z);
}

function cameraTick() {
    if (flag) {
        camera_current_position[0] = camera.position.x;
        camera_current_position[1] = camera.position.y;
        camera_current_position[2] = camera.position.z;
        var isDirty = false;
        for (var a = 0; a < 3; a++) {
            if (camera_goal_position[a] != camera_current_position[a]) {
                isDirty = true;
                break;
            }
        }
        if (isDirty) {
            var cameraX = camera_current_position[0] + 0.1 * Math.sign(camera_goal_position[0] - camera_current_position[0]);
            var cameraY = camera_current_position[1] + 0.1 * Math.sign(camera_goal_position[1] - camera_current_position[1]);
            var cameraZ = camera_current_position[2] + 0.1 * Math.sign(camera_goal_position[2] - camera_current_position[2]);
            if (Math.abs(cameraX - camera_goal_position[0]) < 0.2) {
                cameraX = camera_goal_position[0];
            }
            if (Math.abs(cameraY - camera_goal_position[1]) < 0.2) {
                cameraY = camera_goal_position[1];
            }
            if (Math.abs(cameraZ - camera_goal_position[2]) < 0.2) {
                cameraZ = camera_goal_position[2];
            }
            camera.position.set(cameraX, cameraY, cameraZ);
            lookAtTick();
            return;
        }


        isDirty = false;
        if (lookAtCurrent.x != lookAtGoal.x || lookAtCurrent.y != lookAtGoal.y || lookAtCurrent.z != lookAtGoal.z) {
            isDirty = true;
        } if (isDirty) {
            lookAtTick();
        }

    }
}

function lookAtTick() {
    lookAtCurrent.x = lookAtCurrent.x + 0.1 * Math.sign(lookAtGoal.x - lookAtCurrent.x);
    lookAtCurrent.y = lookAtCurrent.y + 0.1 * Math.sign(lookAtGoal.y - lookAtCurrent.y);
    lookAtCurrent.z = lookAtCurrent.z + 0.1 * Math.sign(lookAtGoal.z - lookAtCurrent.z);
    if (Math.abs(lookAtCurrent.x - lookAtGoal.x) < 0.2) lookAtCurrent.x = lookAtGoal.x;
    if (Math.abs(lookAtCurrent.y - lookAtGoal.y) < 0.2) lookAtCurrent.y = lookAtGoal.y;
    if (Math.abs(lookAtCurrent.z - lookAtGoal.z) < 0.2) lookAtCurrent.z = lookAtGoal.z;
    camera.lookAt(lookAtCurrent);
}