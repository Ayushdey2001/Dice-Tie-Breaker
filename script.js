var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;

var diceimage1 = "images/dice" + a + ".png";
var diceimage2 = "images/dice"  + b + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceimage1);
document.querySelectorAll("img")[1].setAttribute("src", diceimage2);

if (a > b) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
}
else if (a < b) {
    document.querySelector("h1").innerHTML = "Player 2 Won! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Tie :|";
}