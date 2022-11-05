var begin = document.querySelector(".begin");
var time = 50
var timer = document.querySelector(".timer");


function countdown_start() {
    time = 50;
    var gameTimer = setInterval(function(){
        time--;
        timer.textContent= "Time: " + time;
}, 1000);
}


//When the Start Quiz button is clicked, it will start the timer and quiz
begin.addEventListener("click", countdown_start)
console.log("begin");