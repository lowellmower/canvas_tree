$(document).ready(function(){
  var cx = document.querySelector('canvas').getContext('2d');
  function branch(length, angle, scale){
    cx.fillRect(0, 0, 1, length);
    if (length < 7) return;
    cx.save();
    cx.translate(0, length);
    cx.rotate(-angle);
    branch(length * scale, angle, scale);
    cx.rotate(2 * angle);
    branch(length * scale, angle, scale);
    cx.restore();
  }
  cx.translate(300,0);
  branch(90, 0.5, 0.8);
});

// BEZIER CURVE
  // cx.beginPath();
  // cx.moveTo(10, 90);
  // cx.bezierCurveTo(20,20,90,100,50,90);
  // cx.lineTo(90, 10);
  // cx.lineTo(10, 10);
  // cx.closePath();
  // cx.stroke();

// RED RECTANGLE
// var canvas = document.querySelector('canvas');
// var context = canvas.getContext("2d");

// context.fillStyle = 'red';
// context.fillRect(10,10,100,50);