var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var sky = new Image();
sky.src = "treximg/backsky.png";
var dino = new Image();
dino.src = "treximg/trex1.png";
var cactus = new Image();
cactus.src = "treximg/cactus.png";
var ground = new Image();
ground.src = "treximg/background.png";

ground.onload = function () {
    ctx.drawImage(sky, 0, 0);
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(dino, 40, dinoY);
    ctx.font = '18px Arial Black';
    ctx.fillStyle = '#555';
    ctx.fillText('НАЖМИТЕ ЛЮБУЮ КЛАВИШУ ...', 340, 160);
}

var dinoY0 = 200;
var dinoY = dinoY0;
var move ='none';
var dinoStart = false;

var fps = 0;
var speed = 1;
var groundX = 0;
var skyX = 0;
var enemy = false;
var cactusX = 972;
var score = 0;

document.addEventListener("keydown", moveUp);

function moveUp() {
    if (dinoStart == false) {
        setTimeout(draw, 1000/60);
        dinoStart = true;
        speed = 1;
        score = 0;
        cactusX = 972;
    } else {
        move = 'up';
    }
}

function draw() {
    if (dinoStart == true) {
        requestAnimationFrame(draw);
    }
    ctx.clearRect (0, 0, 972, 300);
    if (move == 'up') {
        dinoY -= 2*speed;
        if (dinoY <= (dinoY0 - 160)) {move = 'down';}
    } else if ( move == 'down') {
        dinoY += 2*speed;
        if (dinoY >= dinoY0) {move = 'none'; dinoY = dinoY0;}
    }
    // Анимация динозавра
    if ((fps % Math.round(64/speed)) == 0) {dino.src = "treximg/trex1.png"; 
    } else if ((fps % Math.round(32/speed)) == 0) {dino.src = "treximg/trex2.png";}
    // Анимация земли и неба
    groundX -= 2*speed;
    skyX -= speed;
    if (groundX <= -972) {groundX = 0;}
    if (skyX <= -972) {skyX = 0;}
    // Рисуем небо, землю, динозавра
    ctx.drawImage(sky, skyX, 0);
    ctx.drawImage(ground, groundX, 0);
    ctx.drawImage(dino, 40, dinoY);
    // Появляется кактус
    if (enemy == false) {
        if (Math.round(Math.random()*100/speed) == 1) {
            enemy = true;
        }
    } else {
        ctx.drawImage(cactus, cactusX, 200);
        cactusX -= 2*speed;
        if (cactusX >= 20 && cactusX <= 60 && dinoY >=135) {
            dinoStart = false;
            ctx.fillText('СЧЁТ: ' + ('0000'+score).slice(-4) +'. НАЖМИТЕ ЛЮБУЮ КЛАВИШУ ...', 280, 160);
        } else if (cactusX <= -64) {
            score++;
            enemy = false;
            cactusX = 972;
        }
    }
    if (score == (2*speed)) {speed++;}
    // Выводим счёт
    ctx.fillText(('0000'+score).slice(-4), 900, 40);
    fps++;
}