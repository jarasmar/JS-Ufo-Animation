const canvas = document.getElementById("app-canvas");
const ctx = canvas.getContext("2d");

const xBase = 400;
const yBase = 100;

// Functions for Building Planet

// Planet Base
ctx.beginPath();
ctx.ellipse(400, 450, 430, 100, 0, Math.PI, 0);
var grd = ctx.createLinearGradient(0, 300, 0, 400);
grd.addColorStop(0, "rgba(247, 185, 80, 1)");
grd.addColorStop(1, "rgba(134, 27, 74, 1)");
ctx.fillStyle = grd;
ctx.fill();

// Functions for building Sky
// Planet A
ctx.beginPath()
ctx.arc(xBase-200, yBase+100, 40, 0, 2 * Math.PI)
var grd = ctx.createRadialGradient(190, 210, 30, 200, 220, 90);
grd.addColorStop(0, "rgba(247, 185, 80, .1)");
grd.addColorStop(1, "rgba(100, 1, 73, 1)");
ctx.fillStyle = grd
ctx.fill()

// Planet B
ctx.beginPath()
ctx.arc(xBase+350, yBase-80, 60, 0, 2 * Math.PI)
var grd = ctx.createRadialGradient(750, 110, 20, 740, 120, 120);
grd.addColorStop(0, "rgba(247, 185, 80, .3)");
grd.addColorStop(1, "rgba(100, 1, 73, 1)");
ctx.fillStyle = grd
ctx.fill()


// Functions for Building UFO
function buildUfoBody(){
  // UFO Body top half
  ctx.beginPath();
  ctx.ellipse(xBase, yBase, 100, 30, 0, Math.PI, 0);
  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.fill();

  // UFO Body bottom half
  ctx.beginPath();
  ctx.ellipse(xBase, yBase + 2, 100, 10, 0, 0, Math.PI);
  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.fill();

  // UFO Base
  ctx.beginPath();
  ctx.ellipse(xBase, yBase + 14, 50, 12, 0, 0, Math.PI);
  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.fill();

  // UFO Cabin
  ctx.beginPath();
  ctx.ellipse(xBase, yBase - 20, 40, 50, 0, Math.PI, 0);
  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.lineWidth = 3.0
  ctx.stroke();
}

function addUfoLight() {
  // Outer Shade
  buildLightShade(180, 0.05)
  // Middle Shade
  buildLightShade(160, 0.1)
  // Inner Shade
  buildLightShade(140, 0.15)
}

function buildLightShade(xChange, opacity) {
  ctx.beginPath();
  ctx.moveTo(xBase-20, yBase+16);
  ctx.lineTo(xBase-xChange, yBase+500)
  ctx.lineTo(xBase+xChange, yBase+500)
  ctx.lineTo(xBase+20, yBase+16)
  ctx.fillStyle = `rgba(249, 248, 113, ${opacity})`
  ctx.fill();
}

function addUfoWindows() {
  ctx.beginPath()
  ctx.ellipse(xBase-70, yBase-12, 4, 2, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(249, 248, 113)'
  ctx.fill()
  
  ctx.beginPath()
  ctx.ellipse(xBase-40, yBase-14, 6, 3.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(249, 248, 113)'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(xBase, yBase-15, 8, 5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(249, 248, 113)'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(xBase+40, yBase-14, 6, 3.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(249, 248, 113)'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(xBase+70, yBase-12, 4, 2, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(249, 248, 113)'
  ctx.fill()
}

addUfoLight();
buildUfoBody();
addUfoWindows();

