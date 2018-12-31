// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(255, 255, 255)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)"
// ]

var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i=0 ; i<modeButtons.length ; i++){
        modeButtons[i].addEventListener("click", function(){
            for(var i=0 ; i<modeButtons.length ; i++){
                modeButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            // if(this.textContent === "Easy"){
            //     numOfSquares = 3;
            // } else {
            //     numOfSquares = 6;
            // }
            this.textContent === "Easy" ? numOfSquares=3 : numOfSquares=6;
            resetGame();
        });
    }

    for(var i=0 ; i < squares.length ; i++){
        // console.log(colors[i]);
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            // console.log("clicked color:", clickedColor, "picked color:", pickedColor);
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct."
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                messageDisplay.textContent = "Try Again."
                this.style.backgroundColor = "rgb(57, 39, 66)";
            }
        });

    resetGame();

}

    resetButton.addEventListener("click", function(){
        resetGame();
    });
}

function changeColors(color){
    for(var i=0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var pickedIndex = Math.floor(Math.random() * colors.length);
    return colors[pickedIndex];
}

function generateRandomColors(numberOfColors){
    var newColors = [];
    for(var i=0 ; i<numberOfColors ; i++){
        newColors.push(getRandomColor());
    }
    // console.log("array: " + newColors)
    return newColors;
}

function getRandomColor(){
    var rgb = "rgb(";
    rgb += Math.floor(Math.random() * 256) + ", ";
    rgb += Math.floor(Math.random() * 256) + ", ";
    rgb += Math.floor(Math.random() * 256) + ")";
    return rgb ;
}

function resetGame(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0 ; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.background = "pink";
}


// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     h1.style.background = "pink";
//     messageDisplay.textContent = "";
//     numOfSquares = 3;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0 ; i<squares.length ; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     h1.style.background = "pink";
//     messageDisplay.textContent = "";
//     numOfSquares = 6;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0 ; i<squares.length ; i++){
//         squares[i].style.display = "block";
//         squares[i].style.backgroundColor = colors[i];
//     }
// });