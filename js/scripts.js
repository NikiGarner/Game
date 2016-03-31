//Business logic
function Player(playerName, currentScore, totalScore) {
  this.playerName = playerName;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function () {
  var dieRoll = Math.floor(Math.random()*6)+1;
  return dieRoll;
}

// Player.prototype.showScores = function() {
//   $(".current-score").text(this.currentScore);
//   $(".total-score").text(this.totalScore);
//   console.log("score");
// }

Player.prototype.turn = function() {
  console.log("function test");
  var currentRoll = this.roll();
  $(".current-roll").text(currentRoll);
  while (this.totalScore <100) {
    if (currentRoll !==1) {
      this.currentScore += currentRoll;
    } else {
      this.currentScore = 0;
    }
  $(".current-score").text(this.currentScore);
  return this.currentScore;
  }

};

Player.prototype.hold = function () {
  this.totalScore += this.currentScore;
  $(".total-score").text(this.totalScore);
};

if (Player.totalScore <100) {
} else if (Player.totalScore >=100) {
  console.log("score test");
}

//user interface logic
$(document).ready(function() {
  var playerOne;
  var playerTwo;
  $("form#playerOne").submit(function() {
    event.preventDefault();
    var inputtedPlayerOneName = $("input#player-one-name").val();
    playerOne = new Player(inputtedPlayerOneName, 0, 0);
    console.log(playerOne);
  });

  $("form#playerTwo").submit(function() {
    event.preventDefault();
    var inputtedPlayerTwoName = $("input#player-two-name").val();
    playerTwo = new Player(inputtedPlayerTwoName, 0, 0);
    console.log(playerTwo);
  });

  $("button#hold1").click(function(event){
    console.log("hold button test player1");
    playerOne.hold();
  });

  $("button#roll1").click(function(event) {
    playerOne.turn();
    //playerOne.totalScore = playerOne.totalScore + playerOne.currentScore;
    $(".total-score").text(playerOne.totalScore);
    console.log("roll button test player1");
  });

  $("button#hold2").click(function(event){
    console.log("button test player2");
    playerTwo.totalScore + playerTwo.currentScore;
    playerTwo.showScores();
  });

  $("button#roll2").click(function(event) {
    playerTwo.turn();
    playerTwo.showScores();
    console.log("button test player2");
  });
});
