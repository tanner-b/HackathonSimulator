var Hacker = function(name) {
  this.name = name;
  this.colour = "";
  this.tiredness = 0;
  this.enthusiasm = 0;
  this.hunger = 0;
  this.needsAction = true;
  this.isSleeping = false;
  this.update = function() {
    this.needsAction = true;
    this.tiredness++;
    this.hunger++;
    this.enthusiasm--;
    if (this.hunger > 10 || this.tiredness > 10) {
      this.enthusiasm--;
    }
    if (this.enthusiasm < 1) {
      this.enthusiasm = 1;
    }
  }

  this.sleep = function() {
    //sleep
    this.tiredness = 0;
    this.needsAction = false;
  };
  this.code = function() {
    //code
    //Further the progress of your app based on your enthusiasm
    app.progress += this.enthusiasm;
    this.needsAction = false;

  };
  this.goToEvent = function() {
    //Go to event
    this.enthusiasm += 8;
    this.needsAction = false;
  };
  this.eat = function() {
    //eat
    this.hunger = 0;
    this.needsAction = false;
  };

}
