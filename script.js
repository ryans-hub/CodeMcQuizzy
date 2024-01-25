var challengeBtn = document.querySelector("#challenge");
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var secondsLeft = 75;

var question = "What is my favorite color?";

challengeBtn.addEventListener("click", startQuiz);

function startTimer() { 

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

}

function startQuiz() {
    startTimer();
    displayQuestion();
}

function displayQuestion() {

    challengeBtn.textContent = question;
    
}

