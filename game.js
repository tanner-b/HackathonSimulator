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
    // In JS, objects are passed as pointers. So we have to string then parse
    // the Object to create a new reference
    const newHacker = JSON.parse(JSON.stringify(Hacker));
    Game.hackers.push(newHacker);
    id = i + 1;
  }
  document.getElementById('hackerInitialization').style.display = 'none';
};

function clickedHacker(id, element, increment) {
    hacker = Game.hackers[id];
    hacker[element] = hacker[element] + increment;
    alert(hacker[element]);
};
