function draw() {
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  roundRect2(ctx, 25.5, 25.5, 100, 50, 0);
  roundRect2(ctx, 25.5, 100.5, 100, 50, 15);
  roundRect2(ctx, 25.5, 175.5, 100, 50, 25);

  roundRect2(ctx, 25.5, 250.5, 50, 50, 25);

  for (var i = 0; i < 16; i++) {
    squareWithRotation(ctx, 200.5, 50.5, 200, Math.PI / 32 * i);
  }

  squareWithRotation(ctx, 400.5, 400.5, 50, 0);

  for (i = 0; i < 32; i++) {
    ctx.save();
    ctx.translate(300.5, 370.5);
    ctx.rotate(Math.PI / 16 * i);
    squareWithRotation(ctx, 0, 0, 50, 0);
    ctx.restore();
  }

  pacman(ctx, 150.5, 370.5, 24, Math.PI / 3, false);
  ghost(ctx, 50.5, 370.5, 24);
}

function ghost(ctx, x, y, radius) {
  var dX = radius * 2 / 6;
  var dY = radius / 2.4;

  ctx.beginPath();
  ctx.arc(x, y, radius, Math.PI, Math.PI * 2, false);
  ctx.lineTo(x + radius, y + radius);
  ctx.moveTo(x - radius, y);
  ctx.lineTo(x - radius, y + radius);

  for (var i = 1; i < 7; i++) {
    var height = i % 2 == 0 ? y + radius : y + radius - dY;
    ctx.lineTo(x - radius + i * dX, height);
  }
  ctx.stroke();
}

function pacman(ctx, x, y, radius, angle, leftFacing) {
  if (leftFacing) {
    var start = Math.PI - angle / 2;
    var end = Math.PI + angle / 2;
    var counterClockwise = true;
  } else {
    var start = angle / 2;
    var end = Math.PI * 2 - angle / 2;
    var counterClockwise = false;
  }

  ctx.beginPath();
  ctx.arc(x, y, radius, start, end, counterClockwise);
  ctx.lineTo(x, y);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(start);
  ctx.lineTo(radius, 0);
  ctx.restore();
  ctx.stroke();
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
  ctx.arc(x + width - radius, y + radius, radius, Math.PI * 1.5, Math.PI * 2, false);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI * 0.5, false);
  ctx.lineTo(x + radius, y + height);
  ctx.arc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI, false);
  ctx.lineTo(x, y + radius);
  ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5, false);
  ctx.stroke();
}
