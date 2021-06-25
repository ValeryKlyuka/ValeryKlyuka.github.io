var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var sky = new Image();
sky.src = "treximg/backsky.png";
var dino = new Image();
dino.src = "treximg/trex1.png";
var cactus = new Image();
cactus.src = "treximg/cactus.png"
var ground = new Image();
ground.src = "treximg/background.png";

ground.onload = function(){
    ctx.drawImage(sky, 0, 0);
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(dino, 40, dinoY0);
    ctx.font = '18px Arial Black';
    ctx.fillSyle = '#555';
    ctx.fillText('Нажмите любую Клавишу' , 350, 160 );
}

var dinoY0 = 200;
var dinoY = dinoY0;
var move = 'none';
var dinoStart = false;
var fps = 0;
var speed = 1;
var skyX = 0;
var groundX = 0;
var cactusX = 972;
var enemy = false;

document.addEventListener("keydown", moveUp);

function moveUp() {
  if(dinoStart == false) {
      setTimeout(draw, 1000/60);
      score = 0;
      fps = 0;
      dinoStart = true;
  // фикс чита на повтор прыжка в воздухе    
  } else if (move == 'none') {
      move = 'up';
  }
}

function draw() {
    if (dinoStart == true) {
        requestAnimationFrame(draw);
    }
    ctx.clearRect (0, 0, 972, 300);
    if(move == 'up') {
        dinoY -= 2*speed;
        if (dinoY <= (dinoY0-120)) {move = 'down'; dinoY = dinoY0 - 120}
    } else if ( move == 'down') {
        dinoY += 2*speed;
        if (dinoY >= dinoY0) {move = 'none';dinoY = dinoY0}
    }
    if ((fps % Math.round(64/speed)) == 0) {dino.src = 'treximg/trex1.png';
    } else if ((fps % Math.round(32/speed)) == 0) {dino.src = 'treximg/trex2.png';}
    groundX-= 2*speed;
    if (groundX <= -972) {groundX = 0;}
    skyX -= 1*speed;
    if (skyX <= -972) {skyX = 0;}
   
    ctx.drawImage(sky,skyX, 0);
    ctx.drawImage(ground,groundX, 0);
    ctx.drawImage(dino, 40, dinoY);
    score = Math.round(fps/6);
    ctx.fillText(score, 900, 40);
    if ((fps % 600) == 0) {speed++;}

    if (enemy == false) {
        if (Math.round(Math.random()*10) == 1) {
            enemy = true;} 
    } else {
        ctx.drawImage(cactus, cactusX, 200);
        cactusX -= 2*speed;
        if (cactusX > 20 && cactusX < 60 && dinoY > 136) {
            dinoStart = false;
            speed = 1;
            cactusX = 972;
            dinoY = dinoY0;
            move = 'none';
            ctx.fillText('Ваш счёт:'+ score, 450, 160 );
        }
    else if (cactusX <= -64) {enemy = false; cactusX = 972;} 
    }
    // Фикс бага со счётом вконце
    if (dinoStart == false){
        ctx.fillText('Ваш счёт: '+ score, 450, 160 );
    }
    fps++;
}