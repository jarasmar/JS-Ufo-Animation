const canvas = document.getElementById("app-canvas");
const ctx = canvas.getContext("2d");

const xBase = 400;
const yBase = 100;

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
  buildLightShade(120, 0.05)
  // Middle Shade
  buildLightShade(100, 0.1)
  // Inner Shade
  buildLightShade(80, 0.15)
}

function buildLightShade(xChange, opacity) {
  ctx.beginPath();
  ctx.moveTo(xBase-20, yBase+16);
  ctx.lineTo(xBase-xChange, yBase+200)
  ctx.lineTo(xBase+xChange, yBase+200)
  ctx.lineTo(xBase+20, yBase+16)
  ctx.fillStyle = `rgba(250, 250, 0, ${opacity})`
  ctx.fill();
}

function addUfoWindows() {
  ctx.beginPath()
  ctx.ellipse(xBase-70, yBase-12, 4, 2, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(250, 250, 0)'
  ctx.fill()
  
  ctx.beginPath()
  ctx.ellipse(xBase-40, yBase-14, 6, 3.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(250, 250, 0)'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(xBase, yBase-15, 8, 5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(250, 250, 0)'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(xBase+40, yBase-14, 6, 3.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(250, 250, 0)'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(xBase+70, yBase-12, 4, 2, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgb(250, 250, 0)'
  ctx.fill()
}

addUfoLight();
buildUfoBody();
addUfoWindows();

