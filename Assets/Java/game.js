var randomNumber = Math.floor(Math.random()*102) + 19
	console.log(randomNumber);
var wins = 0;

var losses = 0;

console.log(wins, losses);

var targetNumber = 0;



var red = Math.floor(Math.random()*12) + 1;
var two = Math.floor(Math.random()*12) + 1;
var diamond = Math.floor(Math.random()*12) + 1;
var emerald = Math.floor(Math.random()*12) + 1;
console.log(red, diamond, emerald, two)
function reset() {
	red = Math.floor(Math.random()*12) + 1;
	two = Math.floor(Math.random()*12) + 1;
	diamond = Math.floor(Math.random()*12) + 1;
	emerald = Math.floor(Math.random()*12) + 1;
	randomNumber = Math.floor(Math.random()*102) + 19
	targetNumber = 0;
	console.log("reset")
	console.log(red, diamond, emerald, two)
	$("#wins").html("targetNumber");

}
$("#randomNum").append(randomNumber);

	$("#two").on("click", function() {

		targetNumber += two

		 $("#total").html(targetNumber);

		 if (targetNumber === randomNumber) {
		 	wins++;
		 	reset();
		 	 $("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	 $("#randomNum").html(randomNumber);
		 	 $("#total").html(targetNumber);
		 }
		 if (targetNumber > randomNumber) {
		 	losses++;
		 	reset();
		 	$("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	$("#randomNum").html(randomNumber);
		 	$("#total").html(targetNumber);
		 }
	})


	$("#red").on("click", function() {

		targetNumber += red;

		 $("#total").html(targetNumber);

		 if (targetNumber === randomNumber) {
		 	wins++;
		 	reset();
		 	 $("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	 $("#randomNum").html(randomNumber);
		 	 $("#total").html(targetNumber);
		 }
		 if (targetNumber > randomNumber) {
		 	losses++;
		 	reset();
		 	$("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	$("#randomNum").html(randomNumber);
		 	$("#total").html(targetNumber);
		 }
	})

	$("#diamond").on("click", function() {

		targetNumber += diamond;

		 $("#total").html(targetNumber);
		 
		 if (targetNumber === randomNumber) {
		 	wins++;
		 	reset();
		 	 $("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	 $("#randomNum").html(randomNumber);
		 	 $("#total").html(targetNumber);
		 }
		 if (targetNumber > randomNumber) {
		 	losses++;
		 	reset();
		 	$("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	$("#randomNum").html(randomNumber);
		 	$("#total").html(targetNumber);
		 }
	})
	$("#emerald").on("click", function() {

		targetNumber += emerald;

		 $("#total").html(targetNumber);
		 
		 if (targetNumber === randomNumber) {
		 	wins++;
		 	reset();
		 	 $("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	 $("#randomNum").html(randomNumber);
		 	 $("#total").html(targetNumber);
		 }
		 if (targetNumber > randomNumber) {
		 	losses++;
		 	reset();
		 	$("#wins").html("<h2>Wins: "+ wins + "<br><br>Losses: " + losses + "</h2>");
		 	$("#randomNum").html(randomNumber);
		 	$("#total").html(targetNumber);
		 }
	})