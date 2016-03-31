
//business logic
function Player(){
  this.points = 0;
  this.turn = true;
  this.dieRoll = 0;
}
var player1 = new Player();
var player2 = new Player();
var dieRoll = Math.floor(Math.random() * 6) + 1;

Player.prototype.dieRoll = function() {
  this.dieRoll = random;
}
Player.prototype.updateScore = function(){
  return this.points += dieRoll;
}
  if (dieRoll === 1) {
    turn = false;
}
  else {
    console.log(dieRoll);
    turn = true;
  }

  //user interface logic...
  //$("ul#player1Score").append(dieRoll);
  $(document).ready(function() {
  event.preventDefault();
  $("#player-roll").submit(function(event) {

    $("#player1Score.score1").append(playerPoints);
  })
})
