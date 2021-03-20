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
function addPlanets() {
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
}

// Stars
function createBlueStar(x, y, size) {
  ctx.beginPath()
  ctx.arc(x, y, size+3, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(60, 55, 126, .1)'
  ctx.fill()
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(60, 55, 126, .3)'
  ctx.fill()
}
function createYellowStar(x, y, size) {
  ctx.beginPath()
  ctx.arc(x, y, size+3, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(249, 248, 113, .1)'
  ctx.fill()
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(249, 248, 113, .3)'
  ctx.fill()
}
function createPurpleStar(x, y, size) {
  ctx.beginPath()
  ctx.arc(x, y, size+3, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(134, 27, 74, .1)'
  ctx.fill()
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(134, 27, 74, .3)'
  ctx.fill()
}
function createWhiteStar(x, y, size) {
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x+size, y+2*size)
ctx.lineTo(x+2*size, y)
ctx.fillStyle = `rgba(249, 248, 113, .7)`
ctx.fill();  

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x+size, y-2*size)
ctx.lineTo(x+2*size, y)
ctx.fillStyle = `rgba(249, 248, 113, .7)`
ctx.fill();  

ctx.beginPath();
ctx.moveTo(x+size, y-size);
ctx.lineTo(x-size, y)
ctx.lineTo(x+size, y+size)
ctx.fillStyle = `rgba(249, 248, 113, .7)`
ctx.fill(); 

ctx.beginPath();
ctx.moveTo(x+size, y+size);
ctx.lineTo(x+3*size, y)
ctx.lineTo(x+size, y-size)
ctx.fillStyle = `rgba(249, 248, 113, .7)`
ctx.fill(); 
}

function addStars() {
  createBlueStar(100, 200, 5)
  createBlueStar(200, 130, 6)
  createBlueStar(210, 260, 4)
  createBlueStar(700, 350, 5)
  createBlueStar(620, 100, 7)
  createBlueStar(10, 60, 6)

  createPurpleStar(100, 200, 5)
  createPurpleStar(230, 100, 6)
  createPurpleStar(760, 230, 5)
  createPurpleStar(560, 300, 3)
  createPurpleStar(3100, 50, 5)
  createPurpleStar(620, 170, 7)

  createYellowStar(100, 300, 3) 
  createYellowStar(300, 30, 4) 
  createYellowStar(190, 90, 3) 
  createYellowStar(720, 240, 4)  
  createYellowStar(530, 180, 5) 
  createYellowStar(490, 220, 6) 

  createWhiteStar(100, 100, 10)
  createWhiteStar(630, 80, 5)
  createWhiteStar(700, 300, 2)
  createWhiteStar(50, 200, 3)
  createWhiteStar(270, 280, 5)
  createWhiteStar(560, 310, 4)
}



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

addPlanets();
addStars();
addUfoLight();
buildUfoBody();
addUfoWindows();

