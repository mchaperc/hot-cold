(function () {
	var num, count=0, userGuess;

$(document).ready(function(){
	
	var lastGuess;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//New Game link
  	$('a.new').on('click', function() {
  		newGame();
  	})

  	randomGen();

  	//Retrieve user's guess
  	$('form').submit(function() {
  		lastGuess = userGuess;
  		userGuess = parseInt($('#userGuess').val());
  		// guessValid(userGuess);
  		// if (count === 0) {
  		// 	checkGuess(userGuess);
  		// } else {
  		// 	guessProgress(userGuess, lastGuess);
  		// }
  		count++
  		checkGuess(userGuess);
  		$('#count').text(count);
  		$('#guessList').append('<li>' + userGuess + '</li>');
  		$('#userGuess').val('');
  		event.preventDefault();
  	})
});

function checkGuess() {
	if (userGuess === num && count <= 5) {
		$('#feedback').text("I'm a little freaked out... That was some seriously good guessing!");
	} else if (userGuess === num) {
		$('#feedback').text("You're amazing at guessing! " + num + " was the correct answer.");
	} else if (userGuess > num) {
		if (userGuess - num < 4) {
			$('#feedback').text("Molten lava's got nothing on you!");
		} else if (userGuess - num < 10) {
			$('#feedback').text("VERY HOT!");
		} else if (userGuess - num < 20) {
			$('#feedback').text("hot");
		} else if (userGuess - num < 30) {
			$('#feedback').text("warm");
		} else if (userGuess - num < 50) {
			$('#feedback').text("cold");
		} else {
			$('#feedback').text("ICE COLD!");
		}
	} else {
		if (num - userGuess < 4) {
			$('#feedback').text("Molten lava's got nothing on you!");
		} else if (num - userGuess < 10) {
			$('#feedback').text("VERY HOT!");
		} else if (num - userGuess < 20) {
			$('#feedback').text("hot");
		} else if (num - userGuess < 30) {
			$('#feedback').text("warm");
		} else if (num - userGuess < 50) {
			$('#feedback').text("cold");
		} else {
			$('#feedback').text("ICE COLD!");
		}
	}
}


//Random Number Generator
function randomGen() {
	num = Math.floor((Math.random()*100)+1);
}

//Function for New Game
function newGame() {
	$('#feedback').text('Make your Guess!');
	randomGen();
	count = 0;
	$('#count').text(count);
	$('#guessList').children().remove();
}

//Check if input is valid number
// function guessValid(userGuess) {
// 	if (isNaN(userGuess)) {
// 		$('#feedback').text('Please provide an integer between 1 and 100.')
// 	}
// }

// function guessProgress(userGuess, lastGuess) {
// 	if (userGuess > num) {
// 		(userGuess )
// 	} else {

// 	}
// }

}())