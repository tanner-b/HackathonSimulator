var events = [];
var hackerNames = ['Sally', 'Tanner', 'Jeff', 'Jim']
var app = {
  name: "",
  progress: 0
};
var Game = function() {
  this.hour = 0;
  this.hackers = [];
  this.init = function(n) {
    const hackerArray = [];
    for (i = 0; i < n; ++i) {
      hackerArray.push(new Hacker(hackerNames[i]));
    }
    this.hackers = hackerArray;
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

function initializeHackers(n) {
  game.init(n);
  document.getElementById('hackerInitialization').style.display = 'none';
};

function clickedHacker(id, element, increment) {
    hacker = Game.hackers[id];
    hacker[element] = hacker[element] + increment;
    alert(hacker[element]);
};
