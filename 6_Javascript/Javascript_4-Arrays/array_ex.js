var printReverse = function printReverse(array){
    for(var i = array.length-1 ; i >= 0 ; i--){
        console.log(array[i]);
    }
}

var isUniform = function isUniform(array){
    for(i=1,bar=array[0] ; i < array.length ; i++){
        if(array[i] !== bar){
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

// This solution doesn't break out of the search loop because only the 
// anonymous function within the forEach is broken out of by return 
// false;

// var isUniform = function isUniform(array){
//     var bar = array[0];
//     array.forEach(function(elem){
//         if(elem !== bar){
//             console.log("1");
//             return false;
//         }
//     });
//     console.log("2");
//     return true;
// }

var sumArray = function sumArray(array){
    var sum = 0;
    array.forEach(function(num){
        sum += num;
    });
    return sum;
}

var max = function max(array){
    bar = array[0];
    array.forEach(function(num){
        if(num > bar){
            bar = num;
        }
    });
    console.log(bar);
    return bar;
}

var testArray = [1,2,3,4,5,10,6,7,8,9];
var uniTestArray = [2,2,2,2,2,2,2];

printReverse(testArray)
isUniform(testArray)
isUniform(uniTestArray)
sumArray(testArray)
max(testArray)
max(uniTestArray)