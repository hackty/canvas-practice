var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
function window2canvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x-bbox.left * (canvas.width/bbox.width),
        y:y-bbox.top * (canvas.height/bbox.height)
    };
}

canvas.onmousemove = function (e) {
    var loc = window2canvas(canvas, e.clientX, e.clientY);
    drawGuildLine(loc.x,loc.y);
};

function clearBackground() {
    context.clearRect(0,0,canvas.width,canvas.height);
}

function drawVerticalLine(x) {
    context.beginPath();
    context.moveTo(x,0);
    context.lineTo(x,context.canvas.height);
    context.stroke();
}

function drawHorizontalLine(y) {
    context.beginPath();
    context.moveTo(0,y);
    context.lineTo(context.canvas.width,y);
    context.stroke();
}

function drawGuildLine(x,y) {
    clearBackground();
    drawVerticalLine(x);
    drawHorizontalLine(y);
}
