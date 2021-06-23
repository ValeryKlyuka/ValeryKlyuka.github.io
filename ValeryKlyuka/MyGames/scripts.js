window.onload = function(){
  for (var i = 1; i < 257; i++) {
    var Btn = document.createElement('button');
    Btn.type='input';
    Btn.id='button'+i;
    Btn.value=i;
    document.getElementById('pixelgame').appendChild(Btn);  
    Btn.onclick = function() {
      this.style.background = 'RGB(' + Math.floor(Math.random()*256)
      + ',' + Math.floor(Math.random()*256) + ',' + 
      Math.floor(Math.random()*256) + ')';  
    }
    Btn.oncontextmenu = function() {
      this.style.background = 'white';
      return false;
    }
  }
  game1.style.display = "flex";
  game2.style.display = "none";
  game3.style.display = "none";
  game4.style.display = "none";
}

function clearField() {
  for (var i = 1; i < 257; i++) {
    document.getElementById('button'+i).style.background = 'white';
  }
}

var randnumb, tryes;

function beginRandNumb() {
  randnumb = Math.floor(Math.random()*100);
  randOut.value = 'Я загадал число';
  randIn.value = "";
  tryes = 0;
  randIn.style.visibility = "visible";
  randAnswer.style.visibility = "visible";
  randStart.value = "Начать заново";
}

function answerRandNumb() {
  tryes++;
  if (randIn.value >0 && randIn.value < 99){
  if (randIn.value < randnumb) {
    randOut.value = 'Твоё число меньше. Попыток: ' + tryes;
  } else if (randIn.value > randnumb) {
    randOut.value = 'Твоё число больше. Попыток: ' + tryes;
  } else {
    randOut.value = 'Ты угадал число! Попыток: ' + tryes;
    randIn.style.visibility = "hidden";
    randAnswer.style.visibility = "hidden";
  }
  randIn.value = "";
  }
}

var tictacstart = false;
var tic = '';
var field = ['', '', '', '', '', '', '', '', ''];

function begintictac() {
  tictacstart = true;
  tic = 'X';
  tictacprogress.value = 'Начали. Первым ходит ' + tic;
  tictacStart.value = 'Начать заново';
  for (var i = 0; i < 9; i++){
    field[i] = '';
    document.getElementById('cell' + (i + 1)).value = '';
  }
}

function tap(box) {
  if (document.getElementById(box.id).value == '' && tictacstart == true) {
    document.getElementById(box.id).value = tic;
    field[Number(box.id[4])-1] = tic;
    if (tic == 'X') {tic = 'O';}
    else {tic = 'X';}
    tictacprogress.value = 'Сейчас ходит ' + tic;

    if (field[0] == 'X' && field[1] == 'X' && field[2] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[3] == 'X' && field[4] == 'X' && field[5] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[6] == 'X' && field[7] == 'X' && field[8] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[0] == 'X' && field[4] == 'X' && field[8] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[2] == 'X' && field[4] == 'X' && field[6] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[0] == 'X' && field[3] == 'X' && field[6] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[1] == 'X' && field[4] == 'X' && field[7] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}
    else if (field[2] == 'X' && field[5] == 'X' && field[8] == 'X') {tictacprogress.value = 'X победил!'; tictacstart = false;}

    else if (field[0] == 'O' && field[1] == 'O' && field[2] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[3] == 'O' && field[4] == 'O' && field[5] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[6] == 'O' && field[7] == 'O' && field[8] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[0] == 'O' && field[4] == 'O' && field[8] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[2] == 'O' && field[4] == 'O' && field[6] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[0] == 'O' && field[3] == 'O' && field[6] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[1] == 'O' && field[4] == 'O' && field[7] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else if (field[2] == 'O' && field[5] == 'O' && field[8] == 'O') {tictacprogress.value = 'O победил!'; tictacstart = false;}
    else {
    var over = 0;
    for (var i = 0; i < 9; i++){
      if (field[i] != '') {over++;}
      if (over == 9) {
        tictacprogress.value = 'Ничья!'; 
        tictacstart = false;
        over = 0;
      }
    }
    }
  }
}

function displaygame1() {
  game1.style.display = "flex";
  game2.style.display = "none";
  game3.style.display = "none";
  game4.style.display = "none";
}
function displaygame2() {
  game1.style.display = "none";
  game2.style.display = "flex";
  game3.style.display = "none";
  game4.style.display = "none";
}
function displaygame3() {
  game1.style.display = "none";
  game2.style.display = "none";
  game3.style.display = "flex";
  game4.style.display = "none";
}
function displaygame4() {
  game1.style.display = "none";
  game2.style.display = "none";
  game3.style.display = "none";
  game4.style.display = "flex";
}