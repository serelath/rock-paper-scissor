var hands = ['Rock', 'Paper', 'Scissor'];

function playRound(playerSelection, computerSelection) {

	if (playerSelection === "Rock" && computerSelection === "Scissor") {
		return "You win!";
	} else if (playerSelection === "Paper" && computerSelection === "Scissor") {
		return "You lose!";
	} else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
		return "Tie!";
   } else if (playerSelection === "Rock" && computerSelection === "Rock") {
		return "Tie!";
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return "You win!";
   } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
		return "You lose!";
	} else if (playerSelection === "Rock" && computerSelection === "Paper") {
		return "You lose!";
   } else if (playerSelection === "Paper" && computerSelection === "Paper") {
		return "Tie!";
	} else if (playerSelection === "Scissor" && computerSelection === "Paper") {
		return "You win!";
   }

};

var playerPlay = function() {
	var play = "";
	return function(option) {
		if (option === "Rock") {
			play = "Rock";
		} else if (option === "Paper") {
			play = "Paper";
		} else {
			play = "Scissor";
		}
		return play;
	}
	
};

var playRock = function() {
	// Computer's play
	var computerPlay = (function() {

		var x = Math.floor(Math.random() * 3);

		return function() {

			return hands[x];

		}

	})();
	
	var computerSelection = computerPlay();
	
	// Determine win / lose
	playRound("Rock", computerSelection);

	
	console.log(playRound("Rock", computerSelection));
};

// When played
//var playResult = (function() {
//	
//
//	
////	playRound(playerSelection, computerSelection);
//	
//	return {
//		init: function() {
//			console.log('running');
//			clicked();
//		}
//	}
//	
//})();




var playerSelection = playerPlay();

//playResult.init();

//console.log(playRound(playerSelection, computerSelection));

document.querySelector('.rock').addEventListener('click', playRock);	
