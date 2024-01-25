var challengeBtn = document.querySelector("#challenge");
var timeEl = document.querySelector(".time");
var parentEl = document.querySelector("#parent");
var childEl = document.querySelector("#child");
var secondsLeft = 75;

var question = "What is my favorite color?";
var answer = "Purple";

challengeBtn.addEventListener("click", startQuiz);

function startQuiz() {

    // Removes the starting challenge button from index.html file
    challengeBtn.style.display = "none";
    startTimer();
    displayQuestion();
    
}

function startTimer() { 

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

}



function displayQuestion() {

    parentEl.textContent = question;
    childEl.textContent = answer;
    
}

