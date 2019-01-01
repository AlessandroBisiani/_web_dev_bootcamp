num1 = -10;
num2 = 10;
num3 = 300;
num4 = 5;

for(num1; num1 <= 19; num1++){
    console.log(num1);
}


for (num2; num2 <= 40; num2++) {
    if(num2 % 2 === 0){
        console.log(num2);
        num2++
    }
}


for (num3; num3 <= 333; num3++) {
    if(num3 % 2 === 1){
        console.log(num3);
        num3++
    }
}


for(num4; num4 < 50; num4++){
    if((num4 % 5 === 0) && (num4 % 3 === 0)){
        console.log(num4);
    }
}