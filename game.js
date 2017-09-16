var events = [];
var Game = {
  hour: 0,
  hackers: [],
  update: function(dt){

  },
  draw: function(){

  }
};

function initializeHackers(n) {
  for (i = 0; i < n; ++i) {
    Game.hackers.push(Hacker);
  }
  document.getElementById('hackerInitialization').style.display = 'none';
  console.log(Game);
};

function clickedHacker(hacker) {
    hacker.productivity = hacker.productivity + 10;
    alert(hacker.productivity);
};
