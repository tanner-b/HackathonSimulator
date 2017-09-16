var c; //Canvas variable
var ctx; //Canvas draw context
var lastTime; //Time of last frame
var milliSecondCounter = 0; //Counts milliseconds, used for fps counter
var deltaTime = 0; //Stores the difference in time
var fps = 0; //Counts fps every update step
var requestAnimFrame =  window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame;

var game;

var shapeX = UNIT, shapeY = UNIT * 2;
var speed = 1; //Units per second

function update() {
  game.update();
}

function draw() {
  //Clear the screen
  ctx.fillStyle = "#FF00FF";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  //Draw other things
  //ctx.fillStyle = "#000000";
  //ctx.fillRect(shapeX, shapeY, UNIT, UNIT);

}

function main() {
  var now = Date.now();

  //Calculate fps
  deltaTime = (now - lastTime);
  milliSecondCounter += deltaTime;
  fps++;
  if(milliSecondCounter >= 1000) {
    console.log("Fps: " + fps);
    milliSecondCounter = 0;
    fps = 0;
  }

  //Update then draw
  //update(deltaTime / 1000); //Pass seconds, not milliseconds  eg. (100ms -> 0.1s)
  draw();

  lastTime = now;
  requestAnimFrame(main);
}

function init() {
  c = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  //Set canvas dimestions to specified width and height
  c.width = WIDTH;
  c.height = HEIGHT;

  game = new Game();

  //Create an image buffer to draw pixel data
  lastTime = Date.now();
  main();
}

window.onload = function () {
    console.log("Page loaded and script running")
    init();
}
