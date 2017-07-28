var alphe = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var wins = 0;
	var losses = 0;
  	var guessesLeft = 9;
    var guessedLetters = [];
        
    document.onkeyup = function(event) {
	   var userChoices = event.key;
       guessedLetters.push(userChoices);

        var psychCom = alphe[Math.floor(Math.random() * alphe.length)];

    if (userChoices === psychCom) {
        wins++;
        guessesLeft = 9;
    }
    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
       guessesLeft = 9;
       guessedLetters = [];
        
    }

    var html =
           "<h1>The Psychic Game</h1>" +
           "<h2>Guess what letter I am thinking of...</h2>" +
           "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guessed Letters: " + guessedLetters.join(', ');
        
        document.querySelector("#game").innerHTML = html;

        
   	}