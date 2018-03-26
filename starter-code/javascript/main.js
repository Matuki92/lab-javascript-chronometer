

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerText = 'STOP';
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerText = 'START';
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (btnLeft.className == 'btn start'){
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

   if (btnRight.className == 'btn reset') {
    setSplitBtn();
  } else {
    setResetBtn()
  }
});
