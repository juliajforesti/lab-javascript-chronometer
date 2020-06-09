const chronometer = new Chronometer();
let intervalId = 0

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0];
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1];
}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
    // muda o botão START para STOP no startClick
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    // muda o botao RESET para SPLIT no startClick
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    // muda o botão de STOP para START no startClick
    chronometer.stopClick();
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    // muda o botão de SPLIT para RESET no startClick
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
}

function clearClock() {
  minDec.innerHTML = '0';
  minUni.innerHTML = '0';
  secDec.innerHTML = '0';
  secUni.innerHTML = '0';
  milDec.innerHTML = '0';
  milUni.innerHTML = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains("start")){
    chronometer.startClick(printTime);
    // printTime()
    setStopBtn();
    setSplitBtn();

  } else {
    // clearInterval(intervalId);
    setStartBtn();
    setResetBtn();
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")){
    clearSplits();
    clearClock();
    chronometer.resetClick();
  } else {
    printSplit();
  }
});
