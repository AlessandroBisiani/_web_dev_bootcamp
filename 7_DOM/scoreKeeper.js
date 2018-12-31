var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
// var numInput = document.querySelector("input[type=\"number\"]");
var numInput = document.querySelector("input");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var maxScoreDisplay = document.querySelector("#maxScoreDisplay");

var p1Score = 0;
var p2Score = 0;
var gameover = false;
var maxScore = 5;

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    gameover = false;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove("winStyle");
    score2.classList.remove("winStyle");
});

p1Button.addEventListener("click", function(){
    if(!gameover){
        p1Score++;
        score1.textContent = p1Score;        
        if(maxScore === p1Score){
            gameover = true;
            score1.classList.toggle("winStyle");
            console.log("End of the line. P1 Win.");
        }
    }
});

p2Button.addEventListener("click", function(){
    if(!gameover){
        p2Score++;
        score2.textContent = p2Score;
        if(maxScore === p2Score){
            gameover = true;
            score2.classList.toggle("winStyle");
            console.log("End of the line. P2 Win.");
        }
    }
});

numInput.addEventListener("change", function(){
    maxScore = Number(numInput.value)
    maxScoreDisplay.textContent = maxScore;
    if(maxScore <= p2Score && maxScore <= p1Score){
        gameover = true;
        score2.classList.toggle("winStyle");
        score1.classList.toggle("winStyle");
        console.log("End of the line, Cheater.");
    } else if(maxScore <= p2Score){
        gameover = true;
        score2.classList.toggle("winStyle");
        console.log("End of the line. P2 Win.");
    } else if (maxScore <= p1Score){
        gameover = true;
        score1.classList.toggle("winStyle");
        console.log("End of the line. P1 Win.");
    }
});

// Original solution to the problem. Wrapping the elements in a <span>,
// as above, is much better because it allows easy extension of the 
// the bahavior related to the score, I discovered here.

// p1Button.addEventListener("click", function(){
//     if(!gameover){
//         p1Score++;
//         h1.textContent = p1Score + h1.textContent.slice(1,);
//         if(maxscore === p1Score){

//         }
//     }
// });

// p2Button.addEventListener("click", function(){
//     if(!gameover){
//         p2Score++;
//         h1.textContent = h1.textContent.slice(0,-1) + p2Score;
//         if(maxscore === p2Score){

//         }
//     }
// });