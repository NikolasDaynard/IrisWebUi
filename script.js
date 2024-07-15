var textBox = document.getElementById('text-box');
var textBoxDrag = document.getElementById('text-box-drag');
var irisScript = "";

let mouseClickDrag = false;

textBoxDrag.addEventListener('mousedown', function(event) {
    mouseClickDrag = true;
});

document.addEventListener('mouseup', function(event) {
    mouseClickDrag = false;
});

textBox.addEventListener('change', function(e){
    irisScript = textBox.value;
    run(irisScript);
});

document.addEventListener('mousemove', function(event) {
    if (mouseClickDrag) {
        event.clientX = Math.min(event.clientX, clientWidth / 2);
        textBoxDrag.style.left = (event.clientX - textBoxDrag.clientWidth) + "px";
        textBox.style.width = (event.clientX - textBoxDrag.clientWidth) + "px";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // run("test");
});