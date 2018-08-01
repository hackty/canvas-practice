var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

MARGIN = 35;
RADIUS = canvas.height/2-MARGIN;

NUMERAL_SPACING = 25;
FONT_HEIGHT = 15;
HAND_NUMERAL_RADIUS = RADIUS+NUMERAL_SPACING;
HAND_HOUR_RADIUS = RADIUS*0.5;
HAND_MINUTE_RADIUS = RADIUS*0.8;
HAND_SECOND_RADIUS = RADIUS*0.8;

function drawCircle() {
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, RADIUS, 0, Math.PI*2, true);
    context.stroke();
}

function drawNumeral() {
    var numerals=[1,2,3,4,5,6,7,8,9,10,11,12],
        angle=0,
        numeralWidth=0;
    numerals.forEach(function (numeral) {
       angle= (numeral-3)*Math.PI/6;
       numeralWidth=context.measureText(numeral).width;
       context.fillText(numeral, canvas.width/2 + HAND_NUMERAL_RADIUS*Math.cos(angle) -numeralWidth/2, canvas.height/2+HAND_NUMERAL_RADIUS*Math.sin(angle)+FONT_HEIGHT/3);
    });
}

function drawCenter() {
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2,5,0,2* Math.PI,true);
    context.fill();
}

function drawHand(loc, isHour) {
    if(isHour){
        context.moveTo(canvas.width/2, canvas.height/2);
        angle=2*Math.PI*loc/12-Math.PI/2;
        context.lineTo(canvas.width/2+Math.cos(angle)*HAND_HOUR_RADIUS, canvas.height/2+Math.sin(angle)*HAND_HOUR_RADIUS);
        context.stroke();
    }else{
        context.moveTo(canvas.width/2, canvas.height/2);
        angle=2*Math.PI*loc/60-Math.PI/2;
        context.lineTo(canvas.width/2+Math.cos(angle)*HAND_MINUTE_RADIUS, canvas.height/2+Math.sin(angle)*HAND_MINUTE_RADIUS);
        context.stroke();
    }
}

function drawHands() {
    var date = new Date(),
    hour = date.getHours();
    hour = hour > 12 ? hour-12: hour;
    drawHand(hour,true);
    var minute = date.getMinutes();
    drawHand(minute,false);
    var second = date.getSeconds();
    drawHand(second,false);
}

function drawClock() {
    context.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    drawCenter();
    drawNumeral();
    drawHands();
}
context.font = FONT_HEIGHT+'px + Arial';
loop = setInterval(drawClock, 1000);