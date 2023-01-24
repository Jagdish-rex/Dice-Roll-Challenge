// // Set values for the dice 1
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomImagesource1 = "images/dice" + randomNumber1 + ".png";//./images/dice1.png
// var img1 = document.querySelectorAll("img")[0];
// img1.setAttribute("src", randomImagesource1);

// // Set value for dice 2
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImagesource2 = "images/dice" + randomNumber2 + ".png";//./images/dice1.png
// var img2 = document.querySelectorAll("img")[1];
// img2.setAttribute("src", randomImagesource2);

// // compare two dice value
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 Wins 🚩";
// }
// else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "🚩 Player 2 Wins 🚩";
// }
// else {
//     document.querySelector("h1").innerHTML = "❗ Draw ❗";
// }

// Edit players names
let player1 = "player1";
let player2 = "player2";

function EditNames() {
    let player1 = prompt("Change Player 1 name:");
    let player2 = prompt("Change Player 2 name:");

    if (player1.length < 1 || player2.length < 1) {
        alert("Enter valid names!!");
        return;
    }
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;

}

// Roll The Dice
function rollTheDice() {
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");
    
    dice1.setAttribute("src", "images/ezgif.com-gif-maker (1).gif");
    dice2.setAttribute("src", "images/ezgif.com-gif-maker (1).gif");

    setTimeout(() => {
        // Set values for the dice 1
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomImagesource1 = "images/dice" + randomNumber1 + ".png";//./images/dice1.png
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", randomImagesource1);

        // Set value for dice 2
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImagesource2 = "images/dice" + randomNumber2 + ".png";//./images/dice1.png
        var img2 = document.querySelectorAll("img")[1];
        img2.setAttribute("src", randomImagesource2);

        // compare two dice value
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins 🚩";
        }
        else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "🚩 Player 2 Wins 🚩";
        }
        else {
            document.querySelector("h1").innerHTML = "❗ Draw ❗";
        }
    },2500);
}
