var events = [];
var app = {
  name: "",
  progress: 0
};
var Game = function() {
  this.hour = 0;
  this.hackers = [];
  this.init = function() {
    this.hackers = [new Hacker("Sally"), new Hacker("Tanner"), new Hacker("Jeff")];
    document.getElementById("buttonSpace").innerHTML = generateHTMLTable("buttonSpace", this.hackers.length);
  }
  this.update = function() {
    this.hour++;
    this.hackers.forEach(function(h) {
      h.update();
    });
    //Generate the buttons for actions
    document.getElementById("buttonSpace").innerHTML = generateHTMLTable("buttonSpace", this.hackers.length);
  }
  this.draw = function() {

  }
};
