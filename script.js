var challengeBtn = document.querySelector("#challenge");
var timeEl = document.querySelector(".time");
var parentEl = document.querySelector("#parent");
var childEl = document.querySelector("#child");
var answerEl = document.querySelector("#answer");
var secondsLeft = 75;
var questionIndex = 0;

// Array of objects that contains questions, options, and the answers
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<javascript>", "<js>", "<link>"],
        answer: "<script>"
    }
];

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

    var presentQuestion = questions[questionIndex];

    parentEl.textContent = presentQuestion.question;

    // for loop to generate the option button for each answer, and calls on the checkAnswer function to check
    for (var i = 0; i < presentQuestion.options.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = presentQuestion.options[i];
        answerEl.appendChild(answerBtn);
        answerBtn.addEventListener("click", checkAnswer);

    }

    // var answerBtn = document.createElement("button");
    // answerBtn.textContent = answer;
    // answerEl.appendChild(answerBtn);

    // var answerBtn2 = document.createElement("button");
    // answerBtn2.textContent = answer2;
    // answerEl.appendChild(answerBtn2);
    
    // answerBtn.addEventListener("click", checkAnswer);
    // answerBtn2.addEventListener("click", checkAnswer);
    

}

function checkAnswer(event) {

    var selected = event.target.textContent;
    var correctAnswer = questions[questionIndex].answer;

    if(selected === correctAnswer) {

        console.log("correct");

    } else {
        console.log("incorrect");
        secondsLeft-=10;
    }
}

