var challengeBtn = document.querySelector("#challenge");
var timeEl = document.querySelector(".time");
var parentEl = document.querySelector("#parent");
var childEl = document.querySelector("#child");
var answerEl = document.querySelector("#answer");
var secondsLeft = 75;

var question = "What is my favorite color?";
var answer = "Purple";
var answer2 = "Green";

challengeBtn.addEventListener("click", startQuiz);

function startQuiz() {

    // Removes the starting challenge button from index.html
    challengeBtn.style.display = "none";
    childEl.style.display = "none";
    startTimer();
    displayQuiz();
    
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

function displayQuiz() {

    parentEl.textContent = question;

    var answerBtn = document.createElement("button");
    answerBtn.textContent = answer;
    answerEl.appendChild(answerBtn);

    var answerBtn2 = document.createElement("button");
    answerBtn2.textContent = answer2;
    answerEl.appendChild(answerBtn2);
    
    answerBtn.addEventListener("click", checkAnswer);
    answerBtn2.addEventListener("click", checkAnswer);
    

}

function checkAnswer(event) {

    var selected = event.target.textContent;

    if(selected === answer) {

        console.log("correct");

    } else {
        console.log("incorrect");
        secondsLeft-=10;
    }
}

