var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
context.font='38pt Airal';
context.fillStyle='red';
context.strokeStyle='blue';
context.shadowColor='yellow';
context.shadowOffsetX=1
context.shadowBlur=1;
context.fillText('text',canvas.width/2-150,canvas.height/2+15);
context.strokeText('text',canvas.width/2-150,canvas.height/2+15);
