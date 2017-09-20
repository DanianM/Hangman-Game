//globals
var answers = ["audi", "bmw", "tesla", "ford", "chevrolet", "ferrari", "lamborghini", "jaguar"];
var word;
var points;
var answerList	
var guessesLeft;
var lettersGuessed;
var wins=0;

function reset(){
		document.getElementById('letterGuessed').innerHTML = " ";
		guessesLeft= 10 ;
		answerList= [];
		word = answers[Math.floor(Math.random() * answers.length)];
		for (var i=0; i<word.length;i++){
			answerList.push("_");
			document.getElementById('wordState').innerHTML = answerList.join(" ");
		}
		document.getElementById('guessLeft').innerHTML = guessesLeft;
		points= 0;
}
reset();

function isLetter(letter){
	return letter.match(/[a-zA-Z]/);
}

document.onkeyup=function(e){
	var userGuess=new String.fromCharCode(event.keyCode || event.code).toLowerCase();
	if(isLetter(userGuess)){
			
		for(var i=0;i<word.length;i++){
			if(userGuess === word[i]){
			answerList[i] === userGuess;
			document.getElementById('wordState').innerHTML = answerList.join(" ");
			points ++;
			}
		}
	
	lettersGuessed=document.createElement('li');
	lettersGuessed.innerHTML=userGuess;
	document.getElementById('letterGuessed').appendChild(lettersGuessed);

	guessesLeft--;
		document.getElementById('guessLeft').innerHTML = guessesLeft;
		if (guessesLeft < 1){
			alert("Game Over!");
			reset();
		}

	if(points===word.length) {
		wins ++;
		document.getElementById('winNum').innerHTML = wins;
		reset();
	}
	}
}