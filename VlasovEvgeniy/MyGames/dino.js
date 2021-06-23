var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var sky = new Image();
sky.src = "treximg/backsky.png";
var dino = new Image();
dino.src = "treximg/trex1.png"
var ground = new Image();
ground.src = "treximg/background.png";


ground.onload = function() {
  ctx.drawImage(sky, 0, 0);
  ctx.drawImage(ground, 0, 0);
  ctx.drawImage(dino, 10, dinoY);
}
var dinoY0 = 200;
var dinoY = dinoY0;       
var move = "null";
var dinoStart = false;
document.addEventListener("keydown", moveUp);

function moveUp() {
  if (dinoStart == false){
    setTimeout(draw, 1000/60);
    dinoStart = true;
  } else {
    move = "up";
  }
}

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect (0,0,972,300);
  if (move == "up") {
    dinoY -= 2;  
    if (dinoY == (dinoY0 - 120)) {move = "down";}
  } else if (move == "down") {
    dinoY += 2;
    if (dinoY == dinoY0) {move = "none";}
  }
  ctx.drawImage(sky, 0, 0);
  ctx.drawImage(ground, 0, 0);
  ctx.drawImage(dino, 10, dinoY);
}