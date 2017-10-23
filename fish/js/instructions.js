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

       
}
function writeText(message) {
    document.getElementById("instruction").innerHTML = message;
}