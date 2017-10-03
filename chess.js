var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



canvas.width = 200;
canvas.height = 200;

ctx.width = 200;
ctx.height = 200;

console.log(ctx.width);


ctx.beginPath();
for(var x = 0; x < ctx.width; x += 40) {
        ctx.moveTo(0.5 + x, 0);
        ctx.lineTo(0.5 + x, ctx.width);

}
for(var y = 0; y < ctx.height; y += 40) {
        ctx.moveTo(0, 0.5 + y);
        ctx.lineTo(ctx.height, 0.5 + y);
}
ctx.closePath();
ctx.stroke();
