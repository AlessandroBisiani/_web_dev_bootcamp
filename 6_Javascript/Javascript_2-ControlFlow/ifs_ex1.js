if (age < 0) {
    console.log("Error. Age is negative.")
} 

if(age == 21) {
    console.log("Happy 21st birthday!")
}

if(!((age % 2) === 0)) {
    console.log("Your age is odd!")
}
// if((age % 2) === !0) {
//     console.log("Your age is odd!")
// }


if(age % Math.sqrt(age) === 0) {
    console.log("Perfect square!")
}