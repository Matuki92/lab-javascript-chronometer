// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function () {

  var self = this;

  var sumInterval = function () {
    self.currentTime++;
    self.setTime();
  }

  this.intervalId = setInterval(sumInterval, 1000);

  };

 Chronometer.prototype.setMinutes = function () {
  
  return Math.floor(this.currentTime / 60);

 };

 Chronometer.prototype.setSeconds = function () {


    return this.currentTime - 60 * this.setMinutes();

 };

 Chronometer.prototype.twoDigitsNumber = function (number) {
  
  if (number >= 0 && number < 10){
    return "0"+ number;
  } else {
    return ""+number;
  }

 };

 Chronometer.prototype.setTime = function () {



 };

 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
  
  clearInterval(this.intervalId);

 };

 Chronometer.prototype.resetClick = function () {

  this.currentTime = 0;

 };

 Chronometer.prototype.splitClick = function () {

 };
