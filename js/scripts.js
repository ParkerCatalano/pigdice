
//business logic
function Player(){
  this.points = 0;
  this.turn = true;
}
var player1 = new Player();
var player2 = new Player();

Player.prototype.dieRoll = Math.floor(Math.random() * 6) + 1;
  if (dieRoll === 1) {
    turn = false;
}
  else if (dieRoll > 1) {
    alert("Your Rolled a " + dieRoll);
  }

  //user interface logic...
  //$("ul#player1Score").append(dieRoll);
