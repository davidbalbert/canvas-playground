function draw() {
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  ctx.save();
  ctx.translate(50, 25);
  ctx.rotate(Math.PI / 4);
  roundRect(ctx, 0, 0, 50, 50, 0);
  ctx.restore();

  /*
  roundRect2(ctx, 25, 25, 100, 50, 0);
  roundRect2(ctx, 25, 100, 100, 50, 15);
  roundRect2(ctx, 25, 175, 100, 50, 25);

  roundRect2(ctx, 25, 250, 50, 50, 25);
  */
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.stroke();
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
  ctx.stroke();
}
