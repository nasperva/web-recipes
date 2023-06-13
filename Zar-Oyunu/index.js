var randomNumber1 = Math.floor(Math.random() * 6) + 1;      //0-5 arası kalmasın diye +1 ekliyoruz


var randomDiceImage = "dice" + randomNumber1 + ".png";      // dice1.png - dice3.png vs.
var randomImageSource = "images/" + randomDiceImage;        //images/dice1.png vs.


var image1 = document.querySelectorAll("img")[0];           //ilk zar resmini bul
image1.setAttribute("src", randomImageSource)               //değişecek kısım src, yeni gelecek değer randomImagesource


//! ikinci zarı ayrı bir random numara ile alacağız

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
/* var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2) */

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie"
}
