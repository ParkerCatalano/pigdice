
//business logic
var turn = true;

function Player(points,hold){
  this.points = points;
  this.hold = hold;
}

var dieRoll = Math.floor(Math.random() * 6) + 1;
  if (dieRoll === 1) {
    turn = false;
}
  else if (dieRoll > 1) {
    alert("Your Rolled a " + dieRoll);
    $("ul#player1Score").append(dieRoll);
  }
