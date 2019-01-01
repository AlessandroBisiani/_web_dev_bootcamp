// Prob 1

var isEven = function isEven(){
    return num%2 === 0;
}

// var isEven = function isEven(num) {
//     if(num%2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }



// Prob 2
var factorial = function factorial(num){
    return math.factorial(num);
}



// Prob 3
var kebabToSnake = function kebabToSnake(kebabText){
    kebabText = kebabText.replace(/-/g, "_");
    return kebabText;
}

kebabToSnake("Max-Imil-ian");

// var kebabToSnake = function kebabToSnake(kebabText){
//     for(i=0 ; i<kebabText.length ; i++){
//         if(kebabText[i] === "-"){
//             kebabText.replace("-", "_");
//         } 
//     }
// }

// kebabToSnake("Ale-Bis");

// var kebabToSnake = function kebabToSnake(kebabText){
//     var snakeText = "";
//     var i = 0;
//     while(i < kebabText.length){
//         if(kebabText[i] === "-"){
//             kebabText[i] = snakeText[i].concat("_");
//         } else {
//             kebabText[i].concat(snakeText[i]);
//         }
//         i++;
//     }
//     console.log("Snaked: " + snakeText)
//     return snakeText;
// }

