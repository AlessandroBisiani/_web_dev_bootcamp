// Missing something here.. This outouts:
// 00
// 001
// 0012
// 00123
// 001234
// 0012345
// 12345
// 00
// 001
// 0012
// 00123
// 001234
// 0012345
// 00123456
// 001234567
// 0012345678
// 00123456789
// 123456789
// function average(scores){
//     var average = 0;
//     for(score in scores){
//         average += score;
//         console.log(average);

//     }
//     return Math.round(average);
// }


// function average(scores){
//     var average = 0;
//     for(var i=0 ; i<scores.length ; i++){
//         average += scores[i];
//     }
//     average = average/scores.length;
//     return Math.round(average);
// }

function average(scores){
    avg = 0;
    scores.forEach(function(score){
        avg += score;
    });
    avg = avg / scores.length;
    return Math.round(avg);
}


var s = [90,98, 89, 100, 86, 94];
var s2 = [40,56,77,82,80,54,73,63,85,49];
console.log(average(s));
// javascript sometimes does not like return value names to be
// the same as those of functions. 
// Before changing "average" to "avg", this was executing well
// until the last line, then returning: "average not a function.".
// Perhaps because average was the return key from average() in that 
// context? Somehow?
console.log(average(s2));
