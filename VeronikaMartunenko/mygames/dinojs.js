var CVS = document.getElementById("canvas");
var ctx = CVS.getContext('2d');

var sky = new Image();
sky.src = "treximg/backsky.png";
var dino = new Image();
dino.src = "treximg/trex1.png"; 
var cactus = new Image();
cactus.src = 'treximg/cactus.png';
var ground = new Image();
ground.src = "treximg/background.png";

ground.onload = function(){
    ctx.drawImage(sky, 0, 0);
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(dino, 40, dinoY)
    ctx.font = '18px Arial Black';
    ctx.fillStyle = '#555';
    ctx.fillText('нажмите любую клавишу', 350, 160);
}
var dinoY0 = 200;
var dinoY = dinoY0;
var move = "none";
var dinoStart = false;
var fps = 0;
var speed = 1;
var skyx = 0;
var groundx = 0;
var cactusx = 972;
var enemy = false;
var score = 0;

document.addEventListener("keydown", moveUp);

function moveUp(){
    if (dinoStart == false){
        setTimeout(draw, 1000/60)
        score = 0;
        fps = 0;
        dinoStart = true;
    // фикс чита на прыжки в воздухе
    } else if (move == 'none'){
        move = 'up'
    }
}

function draw(){
    //очистка и перерисовка
    if (dinoStart == true){
        requestAnimationFrame(draw);
    }
    ctx.clearRect (0, 0, 972, 300)
    //прыжки
    if (move == 'up'){
        dinoY -= 2*speed;
        if (dinoY <= ( dinoY0 - 120)) {move = 'down'; dinoY = dinoY0 - 120;}
        } else if (move == 'down'){
            dinoY += 2*speed;
            if (dinoY >= dinoY0) {move = 'none'; dinoY = dinoY0;}
        }
        //анимация динозавра
    if ((fps % Math.round(64/speed)) == 0) {dino.src = 'treximg/trex1.png';
    } else if ((fps % Math.round(32/speed)) == 0) {dino.src = 'treximg/trex2.png';}
    
    //анимация земли и неба
    groundx -= 2*speed;
    if (groundx <= -972) {groundx = 0;}
    skyx -= 1*speed;
    if (skyx <= -972) {skyx = 0;}
   
    //отрисовка
    ctx.drawImage(sky, skyx, 0);
    ctx.drawImage(ground, groundx, 0);
    ctx.drawImage(dino, 40, dinoY); 
    score = Math.round(fps/6);
    ctx.fillText(score, 900, 40);
    if ((fps % 600) == 0) {speed++;}

     //появление кактуса
     if(enemy == false){
        if(Math.round(Math.random()*100) == 1){
            enemy = true;
        }
    } else {
        ctx.drawImage(cactus, cactusx, 200);
        cactusx -= 2*speed;
        if(cactusx > 20 && cactusx < 60 && dinoY > 136){
            dinoStart = false;
            speed = 1;
            dinoStart = false;
            cactusx = 972;
            dinoY = dinoY0;
            move = 'none';
        }
        else if (cactusx <= -64) {enemy = false; cactusx = 972;}
    }
    // фикс бага с отображением счёта в конце
    if (dinoStart == false) {
        ctx.fillText('ваш счёт: '+ score, 400, 160);
    }
    fps++;
}