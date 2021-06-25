window.onload = function(){
    for (var i = 1; i<257; i++) {
    var Btn = document.createElement('button');
    Btn.type='input';
    Btn.id='button'+i;
    Btn.value=i;
    document.getElementById('pixelgame').appendChild(Btn);
    Btn.onclick = function() {
        this.style.background= 'RGB(' + Math.floor(Math.random()*256)
        + ',' + Math.floor(Math.random()*256) + ',' + 
        Math.floor(Math.random()*256) + ')';
    }
    Btn.oncontextmenu = function(){
        this.style.background = 'white';
        return false;
    }
}
game1.style.display = "flex"
game2.style.display = "none";
game3.style.display = "none";
game4.style.display = "none";
}


function clearField() {
    for(var i = 1; i < 257; i++) {
        document.getElementById('button'+i).style.background = 'white';
}
}

var randnumb, tryes;

function beginRandNumb() {
    randnumb = Math.floor(Math.random()*100);
    randOut.value = 'Я загадал число';
    randIn.value ="";
    tryes = 0
    randIn.style.visibility = "visible";
    randAnswer.style.visibility = "visible";
    randStart.value = "Начать заново"
}

function answerRandNumb() {
    tryes++
        
    
   if (randIn.value < randnumb){
       randOut.value = 'Твое число меньше.Попыток: '+ tryes;
   } else if (randIn.value > randnumb) {
    randOut.value = 'Твое число больше.Попыток: '+ tryes;
   } else {
    randOut.value = 'Ты угадал число!.Попыток: '+ tryes;
    randIn.style.visibility = "visible";
    randAnswer.style.visibility = "visible";
   }
   randIn.value = "";
  }

var tictacstart = false;
var tic = '';
var field = [ '','','','','','','','',''];

function begintictac() {
    tictacstart = true;
    tic = 'x';
    tictacprogress.value = 'Начали. Первым ходит ' + tic;
    tictacStart.value = 'Начать заново';
    for (var i = 0; i < 9;i++){
     field[i] = '';
     document.getElementById('cell' + (i + 1)).value = '';
}
}
  
function tap(box) {
    if (document.getElementById(box.id).value == ''&& tictacstart == true)
    document.getElementById(box.id).value = tic;
    field[Number(box.id[4])-1] = tic;
    if (tic == 'x') {tic = '0';}
    else {tic = 'x';}
    tictacprogress.value = 'Сейчас ходит ' + tic;
      
    if (field[0] == 'x' && field[1] == 'x' && field[2] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else  if (field[3] == 'x' && field[4] == 'x' && field[5] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else  if (field[6] == 'x' && field[7] == 'x' && field[8] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else if (field[0] == 'x' && field[4] == 'x' && field[8] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else if (field[2] == 'x' && field[4] == 'x' && field[6] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else if (field[0] == 'x' && field[3] == 'x' && field[6] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else if (field[1] == 'x' && field[4] == 'x' && field[7] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}
  else  if (field[1] == 'x' && field[5] == 'x' && field[8] == 'x') {tictacprogress.value = 'x победил!'; tictacstart = false;}

  else  if (field[0] == '0' && field[1] == '0' && field[2] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else  if (field[3] == '0' && field[4] == '0' && field[5] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else  if (field[6] == '0' && field[7] == '0' && field[8] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else  if (field[0] == '0' && field[4] == '0' && field[8] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else  if (field[2] == '0' && field[4] == '0' && field[6] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else  if (field[0] == '0' && field[3] == '0' && field[6] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else if (field[1] == '0' && field[4] == '0' && field[7] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
  else if (field[1] == '0' && field[5] == '0' && field[8] == '0') {tictacprogress.value = '0 победил!'; tictacstart = false;}
     
  else{

    var over = 0;
    for (var i = 0; i < 9; i++) {
        if (field[i] != '' ) {over++;}
        if (over == 9){
        tictacprogress.value = 'Ничья!'
        tictacstart = false;
        over = 0;
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