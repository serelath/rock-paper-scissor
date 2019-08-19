// Record Tracker
var record = function() {
	var playerWins = 0;
	var compWins = 0;

	return function(win) {
		if (win) {
			playerWins++;
			document.querySelector('.player-score').textContent = playerWins;
		} else {
			compWins++;
			document.querySelector('.comp-score').textContent = compWins;
		}
		return [playerWins, compWins];
	}
}
var playerWin = record();

// Computer
var computerPlay = function() {
	var hands = ['Rock', 'Paper', 'Scissor'];
	var x = Math.floor(Math.random() * 3);
	return hands[x];
};

// Who played what 
function playHands(player, comp) {
	document.querySelector('#player').src = 'images/' + player + '.jpg';
	document.querySelector('#computer').src = 'images/' + comp() + '.jpg';
	
}

// Check who wins
function check() {

	var playerPlay = this.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();

	playHands(playerPlay, computerPlay);

	// Result text
	var docPlug = function(result) {
		switch(result) {
			case 'lose':
				document.querySelector('.results').textContent = 'You lose!';
				playerWin(false);
				break; 
			case 'win':
				document.querySelector('.results').textContent = 'You win!';
				playerWin(true);
				break; 
			case 'tie':
					document.querySelector('.results').textContent = "It's a tie!";
					break;
		}
	}

	// Result conditions
	if (playerPlay === computerPlay()) {
		docPlug('tie');
	} else if (playerPlay === 'Rock' && computerPlay() === 'Scissor') {
		docPlug('win');
	} else if (playerPlay === 'Scissor' && computerPlay() === 'Paper') {
		docPlug('win');
	} else {
		docPlug('lose');
	}

}

// controller
var controller = function() {

	var setupEventListeners = function() {
		var buttons = document.querySelectorAll('button');
		buttons.forEach(button => button.addEventListener('click', check));
	}

	return setupEventListeners();
}

controller();