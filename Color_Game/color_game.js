// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(255, 255, 255)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)"
// ]

var colors = []
colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
// console.log(squares.length);
var pickedColor = pickColor();

var colorDisplay = document.querySelector("#colorDisplay");

var messageDisplay = document.querySelector("#messageDisplay");

colorDisplay.textContent = pickedColor;


for(var i=0 ; i < squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
    // console.log(colors[i]);

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        // console.log("clicked color:", clickedColor, "picked color:", pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct."
            changeColors(pickedColor);
        } else {
            messageDisplay.textContent = "Try Again."
            this.style.backgroundColor = "pink";
        }
    });
}


function changeColors(color){
    for(var i=0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(numberOfColors){
    var newColors = [];
    for(var i=0 ; i<numberOfColors ; i++){
        newColors.push(getRandomColor());
    }
    console.log("array: " + newColors)
}

function getRandomColor(){
    var rgb = "rgb(";
    rgb += Math.floor(Math.random() * 256) + ", ";
    rgb += Math.floor(Math.random() * 256) + ", ";
    rgb += Math.floor(Math.random() * 256) + ")";
    return rgb ;
}

function pickColor(){
    var pickedIndex = Math.floor(Math.random() * colors.length);
    return colors[pickedIndex];
}

getRandomColor()