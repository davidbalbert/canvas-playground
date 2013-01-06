function draw() {
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  roundRect2(ctx, 25, 25, 100, 50, 0);
  roundRect2(ctx, 25, 100, 100, 50, 15);
  roundRect2(ctx, 25, 175, 100, 50, 25);

  roundRect2(ctx, 25, 250, 50, 50, 25);

  /*
  for (var i = 0; i < 16; i++) {
    squareWithRotation(ctx, 50, 50, 200, Math.PI / 32 * i);
  }
  */

}

function squareWithRotation(ctx, x, y, side, angle) {
  ctx.save();
  ctx.translate(x + side / 2, y + side / 2);
  ctx.rotate(angle);
  ctx.translate(-1 * side/2, -1 * side/2);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(side, 0);
  ctx.lineTo(side, side);
  ctx.lineTo(0, side);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(width - radius, 0);
  ctx.quadraticCurveTo(width, 0, width, radius);
  ctx.lineTo(width, height - radius);
  ctx.quadraticCurveTo(width, height, width - radius, height);
  ctx.lineTo(radius, height);
  ctx.quadraticCurveTo(0, height, 0, height - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.stroke();
  ctx.restore();
}

function roundRect2(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.moveTo(x + width, y + radius);
  ctx.arc(x + width - radius, y + radius, radius, 0, Math.PI * 1.5, true);
  ctx.moveTo(x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI * 0.5, false);
  ctx.lineTo(x + radius, y + height);
  ctx.arc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI, false);
  ctx.lineTo(x, y + radius);
  ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5, false);
  ctx.stroke();
}
