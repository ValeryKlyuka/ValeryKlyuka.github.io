//код для игры Pixel Art
window.onload = function() {
for (var i = 1; i < 257; i++) {
    var Btn = document.createElement("button");
    Btn.type = 'input';
    Btn.id='button'+i;
    Btn.value =i;
    document.getElementById('pixelgame').appendChild(Btn);
    Btn.onclick = function() {
        this.style.background= 'RGB(' + Math.floor(Math.random()*256)
      + ',' + Math.floor(Math.random()*256) + ',' + 
      Math.floor(Math.random()*256) + ')'; 
    
        }
    Btn.oncontextmenu = function() {
      this.style.background="white";
      return false;
    }
    }

}

function ClearFild() {
  for (var i = 1; i < 257; i++) {
    document.getElementById('button' +i).style.background = "white"
  }
}


//код для игры Больше-Меньше
var randnum, tryes;

function beginRandNum() {
  randnum = Math.floor (Math.random()*100);
  randOut.value = 'Я загадал число';
  randIn.value = "";
  tryes = 0;
  randIn.style.visibility = "visible";
  randAns.style.visibility = "visible";
  randStart.value = "Начать заново"
}

function answerRandNum() {
  tryes++;
  if (randIn.value < 100 && randIn.value > 0 ) {
    if (randIn.value < randnum) {
      randOut.value ="Твоё число меньше. Попыток: " + tryes;
    }
    else if (randIn.value > randnum) {
      randOut.value ="Твоё число больше. Попыток: " + tryes;
    }
    else {
      randOut.value ="Ты угадал! Попыток: " + tryes;
      randIn.style.visibility = "hidden";
      randAns.style.visibility = "hidden";
    }
    randIn.value = "";
  } else {
    randOut.value ="Неправильное число. Введите заново";
    tryes--;
    randIn.value = "";
  }
}
//конец кода для игры Больше-Меньше

 // начало кода крестики нолики
var tictakstart = false;
var tic = "";
var field = ['', '', '', '', '', '', '', '', ''];

function beginTikTak() {
tictakstart = true;
tic = 'X';
tictakProgress.value = "Начали! Первый ходит " + tic;
tictakStart.value = "Начать заново";
  for (var i = 0; i < 9; i++) {
  field[i] = '';
  document.getElementById('cell' + (i + 1)).value = '';
  }
}

function tap(box) {
  if (document.getElementById(box.id).value == '' && tictakstart == true) {
    document.getElementById(box.id).value = tic;
    field[Number(box.id[4])-1] = tic;
    if (tic == 'X') {tic = 'O';}
    else {tic = 'X';}
    tictakProgress.value = "Сейчас ходит " + tic;

    if (field[0] == 'X' && field[1] == 'X' && field[2] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[3] == 'X' && field[4] == 'X' && field[5] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[6] == 'X' && field[7] == 'X' && field[8] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[0] == 'X' && field[3] == 'X' && field[6] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[1] == 'X' && field[4] == 'X' && field[7] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[2] == 'X' && field[5] == 'X' && field[8] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[0] == 'X' && field[4] == 'X' && field[8] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    else if (field[2] == 'X' && field[4] == 'X' && field[6] == 'X') {tictakProgress.value = "X победил"; tictakstart="false";}
    
    else if (field[0] == 'O' && field[1] == 'O' && field[2] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[3] == 'O' && field[4] == 'O' && field[5] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[6] == 'O' && field[7] == 'O' && field[8] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[0] == 'O' && field[3] == 'O' && field[6] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[1] == 'O' && field[4] == 'O' && field[7] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[2] == 'O' && field[5] == 'O' && field[8] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[0] == 'O' && field[4] == 'O' && field[8] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else if (field[2] == 'O' && field[4] == 'O' && field[6] == 'O') {tictakProgress.value = "O победил"; tictakstart="false";}
    else {
      var over = 0;
      for (var i = 0; i < 9; i++) {
        if (field[i] != '') {over++;}
        if (over == 9) {
          tictakProgress.value = "Ничья!";
          tictakstart="false";
        }
      }
    }
  }
}



function displayGame1() {
game1.style.display = "flex";
game2.style.display = "none";
game3.style.display = "none";
game4.style.display = "none";
}

function displayGame2() {
  game1.style.display = "none";
  game2.style.display = "flex";
  game3.style.display = "none";
  game4.style.display = "none";
}

function displayGame3() {
  game1.style.display = "none";
  game2.style.display = "none";
  game3.style.display = "flex";
  game4.style.display = "none";
}  

function displayGame4() {
  game1.style.display = "none";
  game2.style.display = "none";
  game3.style.display = "none";
  game4.style.display = "flex";
}  
