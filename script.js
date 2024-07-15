var textBox = document.getElementById('text-box');
var textBoxDrag = document.getElementById('text-box-drag');
var irisScript = "";

textBox.addEventListener('change', function(e){
    irisScript = textBox.value;
    run(irisScript);
});

let mouseClickDrag = false;

textBoxDrag.addEventListener('mousedown', function(event) {
    mouseClickDrag = true;
});

document.addEventListener('mouseup', function(event) {
    mouseClickDrag = false;
});

document.addEventListener('mousemove', function(event) {
    if (mouseClickDrag) {
        var xPos = Math.min(event.clientX, window.innerWidth / 2);
        xPos = xPos - textBoxDrag.clientWidth;

        textBoxDrag.style.left = (xPos) + "px";
        textBox.style.width = (xPos) + "px";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // run("test");
});