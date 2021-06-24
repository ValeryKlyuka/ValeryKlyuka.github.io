window.onload = function() {
  for ( var i = 1 ; i < 257 ; i++ ){
    var Btn = document.createElement("button");
    Btn.type="input";
    Btn.value=i;
    Btn.id="button" + i;
    document.getElementById("pixelgame").appendChild(Btn);
    Btn.onclick = function() {
      this.style.background= 'RGB(' + Math.floor(Math.random()*256)
      + ',' + Math.floor(Math.random()*256) + ',' + 
      Math.floor(Math.random()*256) + ')'; 
    }
    Btn.oncontextmenu = function() {
      this.style.background = "white";
      //чтоб не вылезало окно на правой кнопки мышки
      return false;
    }
  }
  game1.style.display = "flex";
  game2.style.display = "none";
  game3.style.display = "none";
  game4.style.display = "none";
  
  

}
function clearField() {
  for ( var i = 1 ; i < 257 ; i++ ){
    document.getElementById("button" + i).style.background = "white"
  }
}
var randnumb, tryes;
function beginRandNumb() {
  randnumb = Math.floor(Math.random()*100);
  randOut.value = "Я загадал число" ;
  randIn.value = ""
  tryes= 0;
  randIn.style.visibility = "visible";
  randanswer.style.visibility = "visible";
  randStart.value = "Начать заново";
}
function answerRandNumb() {
  tryes++; 
  if(randIn.value > 0 && randIn.value<1001){
  if(randIn.value > randnumb){
    randOut.value ="Мое число меньше. Попыток: " + tryes;
  }else if (randIn.value < randnumb){
  randOut.value ="Мое число больше. Попыток:" + tryes;
  }else if (randIn.value = randnumb){
    randOut.value ="Ты победил. Попыток: " + tryes;
    randIn.style.visibility = "hidden";
  randanswer.style.visibility = "hidden";
  }
}else {
  alert("Не получилось :(")
}
  randIn.value = "";
}



// hard mode
function beginRandNumbhard() {
  randnumb = Math.floor(Math.random()*1001);
  randOut.value = "Я загадал число.Hard mode";
  randIn.value = ""
  tryes= 0;
  randIn.style.visibility = "visible";
  randanswer.style.visibility = "visible";
  randStartHard.value = "Начать заново.Hard mode";
}
function answerRandNumbhard() {
  tryes++; 
 if(randIn.value > 0 && randIn.value<1001){
  if(randIn.value > randnumb){
    randOut.value ="Мое число меньше. Попыток: " + tryes;
  }else if (randIn.value < randnumb){
  randOut.value ="Мое число больше. Попыток:" + tryes;
  }else if (randIn.value = randnumb){
    randOut.value ="Ты победил. Попыток: " + tryes;
    randIn.style.visibility = "hidden";
  randanswer.style.visibility = "hidden"; 
  }
}else {
  alert("Не получилось :(")
}
  randIn.value = "";
}

//Answer
function answer() {
  alert(randnumb);
}

var tictacStart = false;
var tic = '';
var field = ['','','','','','','','',''];

function begintictac() {
  tictacStart = true;
  tic = 'X';
  tictacprogress.value = 'Начали. Первым ходит: ' + tic;
  tictacstart.value = 'Начать заново';
  for (var i = 0; i < 9; i++) {
    field[i] = "";
    document.getElementById("cell" + (i + 1)).value = "";
  }
}
function tap(box) {
  if (document.getElementById(box.id).value == "" && tictacStart == true) {
    document.getElementById(box.id).value = tic;
    field[Number(box.id[4])-1] = tic;
    if (tic =='X') {tic = "O";}
    else {tic = 'X';}
    tictacprogress.value="Сейчас ходит " + tic;

    if (field[0] == "X" && field[1] == "X" && field[2] == "X"){tictacprogress.value = "X победил";tictacStart=false;}
    if (field[3] == "X" && field[4] == "X" && field[5] == "X"){tictacprogress.value = "X победил";tictacStart=false;}
    if (field[6] == "X" && field[7] == "X" && field[8] == "X"){tictacprogress.value = "X победил";tictacStart=false;}
    if (field[0] == "X" && field[4] == "X" && field[8] == "X"){tictacprogress.value = "X победил";tictacStart=false;} 
    if (field[2] == "X" && field[4] == "X" && field[6] == "X"){tictacprogress.value = "X победил";tictacStart=false;}
    if (field[0] == "X" && field[3] == "X" && field[6] == "X"){tictacprogress.value = "X победил";tictacStart=false;}
    if (field[1] == "X" && field[4] == "X" && field[7] == "X"){tictacprogress.value = "X победил";tictacStart=false;}
    if (field[2] == "X" && field[5] == "X" && field[8] == "X"){tictacprogress.value = "X победил";tictacStart=false;}

    if (field[0] == "O" && field[1] == "O" && field[2] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
    if (field[3] == "O" && field[4] == "O" && field[5] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
    if (field[6] == "O" && field[7] == "O" && field[8] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
    if (field[0] == "O" && field[4] == "O" && field[8] == "O"){tictacprogress.value = "O победил";tictacStart=false;} 
    if (field[2] == "O" && field[4] == "O" && field[6] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
    if (field[0] == "O" && field[3] == "O" && field[6] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
    if (field[1] == "O" && field[4] == "O" && field[7] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
    if (field[2] == "O" && field[5] == "O" && field[8] == "O"){tictacprogress.value = "O победил";tictacStart=false;}
   
    if (field[0] != "" && field[1] != "" && field[2] != "" && field[3] != "" && field[4] != "" && field[5] != "" && field[6] != "" && field[7] != "" && field[8] != "" && field[0] != "" && field[4] != "" && field[8] != "" && field[2] != "" && field[4] != "" && field[6] != "" && field[0] != "" && field[3] != "" && field[6] != "" && field[1] != "" && field[4] != "" && field[7] != "" && field[2] != "" && field[5] != "" && field[8] != ""){tictacprogress.value = "Ничья";tictacStart=false;}
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

