
//business logic
function Player(){
  this.points = 0;
  this.turn = true;
}
var player1 = new Player();
var player2 = new Player();
var dieRoll = Math.floor(Math.random() * 6) + 1;

Player.prototype.playerPoints = function(){
  return dieRoll
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

    $("ul#player1Score").append(dieRoll);
  })
})
