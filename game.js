var App = function() {
  this.name = "Uber but for stray cats";
  this.progressBar;
};

Game = function() {
  this.running = false;
  this.hour = 1;
  this.hackers = [];
  this.app = new App();
  this.init = function(n) {
    this.running = true;
    const hackerArray = [];
    for (i = 0; i < n; ++i) {
      hackerArray.push(new Hacker(randomizeName()));
    }
    this.hackers = hackerArray;
    document.getElementById("buttonSpace").innerHTML = generateHTMLTable("buttonSpace", this.hackers.length);
    this.app.progressBar = new Bar(WIDTH / UNIT / 2, 2, 18, 1, 0, 200, "#006600", "#00FF00");
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
    if(this.running) {
      ctx.fillStyle = "#000000";
      ctx.font = UNIT + "px fantasy";
      ctx.fillText("(" + Math.round(this.app.progressBar.value * 100 /this.app.progressBar.maxValue) + "%) " + this.app.name, UNIT, UNIT * 1.2,  UNIT*10);
      ctx.font = UNIT*0.6 + "px fantasy";
      ctx.fillText("Hour " + this.hour + " of " + 36, UNIT * 16, UNIT * 3.1, UNIT * 10);

      this.app.progressBar.draw();
    }
  }
};

function initializeHackers(n) {
  game.init(n);
  updateEventText();
  app.name = document.getElementById('nameOfHack').value;
  document.getElementById('hackerInitialization').style.display = 'none';
};

function clickedHacker(id, element, increment) {
    hacker = Game.hackers[id];
    hacker[element] = hacker[element] + increment;
    alert(hacker[element]);
};
