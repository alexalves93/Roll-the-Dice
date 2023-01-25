var player1Score = 0;
var player2Score = 0;

document.addEventListener("keydown", function(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

    var diceImage = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

    var imageElement1 = document.querySelector(".img1");
    imageElement1.setAttribute("src",diceImage[randomNumber1-1]);
    var imageElement2 = document.querySelector(".img2");
    imageElement2.setAttribute("src",diceImage[randomNumber2-1]);

    var heading = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "Player 1 wins!";
        player1Score++;
    } else if (randomNumber1 < randomNumber2) {
        heading.innerHTML = "Player 2 wins!";
        player2Score++;
    } else {
        heading.innerHTML = "Draw!";
    }

    var scoreHeading = document.querySelector(".score1");
    scoreHeading.innerHTML = "Score: " + player1Score;
    var scoreHeading = document.querySelector(".score2");
    scoreHeading.innerHTML = "Score: " + player2Score;
});


