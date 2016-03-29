//Business logic
function Player(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function () {
  var dieRoll = Math.floor(Math.random()*6)+1;
  return dieRoll;
}

Player.prototype.showScores = function() {
  $(".current-score").text(player.currentScore);
  $(".total-score").text(player.totalScore);
}

Player.prototype.turn = function() {
  var currentRoll = this.roll();
  while (this.totalScore <100);
    if (currentRoll !==1) {
      this.currentScore = this.currentScore + currentRoll;
    } else {
      this.currentScore = 0;
    }
    this.totalScore = this.totalScore + this.currentScore;
  }
}

if (player.totalScore <100) {
} else if (totalScore >=100) {
  return alert("You win!");
}

//user interface logic
$(document).ready(function() {
  $("form#playerOne").submit(function() {
    event.preventDefault();
    var inputtedPlayerName = $("input.player-one-name").val();
    var playerOne = new Player(inputtedPlayerName, 0, 0);
  });
  $("form#playerTwo").submit(function() {
    event.preventDefault();
    var inputtedPlayerName = $("input.player-two-name").val();
    var playerTwo = new Player(inputtedPlayerName, 0, 0);
  });

  $("button#hold").click(function(event){
    this.player.totalScore + currentScore;
    this.player.showScores;
  })

  $("button#roll").click(function(event) {
    this.player.turn();
    this.player.showScores();
  })
});
