//Business logic
function Player(playerName, currentScore, totalScore, currentRoll) {
  this.playerName = playerName;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  this.currentRoll = currentRoll;
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
  this.currentRoll = this.roll();

  while (this.totalScore <100) {
    if (this.currentRoll !==1) {
      this.currentScore += this.currentRoll;
    } else {
      this.currentScore = 0;
    }
  return this.currentRoll;
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
    playerOne.totalScore += playerOne.currentScore;
    $(".total-score1").text(playerOne.totalScore);
  });

  $("button#roll1").click(function(event) {
    playerOne.turn();
    $(".current-roll1").text(playerOne.currentRoll);
    $(".current-score1").text(playerOne.currentScore);
    $(".total-score1").text(playerOne.totalScore);
    console.log("roll button test player1");
  });

  $("button#hold2").click(function(event){
    console.log("button test player2");
    playerTwo.totalScore += playerTwo.currentScore;
    $(".total-score2").text(playerTwo.totalScore);
  });

  $("button#roll2").click(function(event) {
    playerTwo.turn();
    $(".current-roll2").text(playerTwo.currentRoll);
    $(".current-score2").text(playerTwo.currentScore);
    $(".total-score2").text(playerTwo.totalScore);
    console.log("button test player2");
  });
});
