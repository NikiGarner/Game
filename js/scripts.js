//Business logic
function player(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

player.prototype.roll = function () {
  var dieRoll = Math.floor(Math.random()*6)+1;
  return dieRoll;
}

player.prototype.showScores = function() {
  $(".current-score1").text(player.currentScore);
  $(".total-score1").text(player.totalScore);
}

player.prototype.turn = function() {
  var currentRoll = this.roll();
    if (currentRoll !==1) {
      this.currentScore = this.currentScore + currentRoll;
    } else {
      this.currentScore = 0;
    }
    return currentScore;
}

if (player.totalScore <100) {
} else if (totalScore >=100) {
  return alert("You win!");
}


//user interface logic
$(document).ready(function() {
  $("form#playerOne").submit(function() {
       var inputtedPlayerName = $("input.player-one-name").val();
       var playerOne = new Player(inputtedPlayerName, 0, 0);
  });
  $("form#playerTwo").submit(function() {
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
});
