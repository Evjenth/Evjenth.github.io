// JavaScript source code
var x_val = 100;
var y_val = 100;
var radius = 50;
updatePosition();

function mouseMove(e) {

    var x = e.clientX;
    var y = e.clientY;

    document.getElementById("X").innerHTML = "X: " + x;
    document.getElementById("Y").innerHTML = "Y: " + y;


    var d = (radius * radius) - (((x_val - x) * (x_val - x)) + ((y_val - y) * (y_val - y)));
    if (d > 0) {
        x_val = getX();
        y_val = Math.floor((Math.random() * (window.innerHeight - 100)) + 25);
        updatePosition();
    }

}
function updatePosition() {
    document.getElementById("circle").style.left = x_val - 22 + 'px';
    document.getElementById("circle").style.top = y_val - 22 + 'px';
}

function getX() {
    return Math.floor((Math.random() * (window.innerWidth - 100)) + 25);
}
