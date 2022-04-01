
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var diceImg1 = document.getElementsByClassName("img1")[0];

diceImg1.setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var diceImg2 = document.getElementsByClassName("img2")[0];

diceImg2.setAttribute("src", randomDiceImage2);

// Redundancy Removed

// if(randomNumber2 === 1) {
//   diceImg2.setAttribute("src", "images/dice1.png");
// } else if(randomNumber2 === 2) {
//   diceImg2.setAttribute("src", "images/dice2.png");
// }
// else if(randomNumber2 === 3) {
//   diceImg2.setAttribute("src", "images/dice3.png");
// }
// else if(randomNumber2 === 4) {
//   diceImg2.setAttribute("src", "images/dice4.png");
// }
// else if(randomNumber2 === 5) {
//   diceImg2.setAttribute("src", "images/dice5.png");
// }
// else if(randomNumber2 === 6) {
//   diceImg2.setAttribute("src", "images/dice6.png");
// }

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
  heading.innerHTML ="🚩Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
  heading.innerHTML ="Player 2 Wins!🚩";
} else {
  heading.innerHTML ="Draw!";
}
