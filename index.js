const canvas = document.getElementById("app-canvas");
const ctx = canvas.getContext("2d");

const xBase = 400;
const yBase = 100;

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
ctx.stroke();