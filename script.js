var challengeBtn = document.querySelector("#challenge");
var timeEl = document.querySelector(".time");
var parentEl = document.querySelector("#parent");
var childEl = document.querySelector("#child");
var answerEl = document.querySelector("#answer");
var statusEl = document.querySelector("#status");
var secondsLeft = 75;
var questionIndex = 0;
var timerInterval;

// Array of objects that contains questions, options, and the answers
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<javascript>", "<js>", "<link>"],
        answer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section"],
        answer: "The <body> section"
    },
    {
        question: "How does a FOR loop start?",
        options: ["for(i=0;i<=5;i++)", "for i=1 to 5", "for(i<=5;i++"],
        answer: "for(i=0;i<=5;i++)"
    },
    {
        question: "DOM stands for what?",
        options: ["DOMINATION", "DOM PERIGNON", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "How do you call a function named myFunction?",
        options: ["myFunction()", "call myFunction()", "call function myFunction()", "myFunction"],
        answer: "myFunction()"
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

    timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        
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
}

function checkAnswer(event) {

    var selected = event.target.textContent;
    var correctAnswer = questions[questionIndex].answer;

    // if else statement that checks for correct answer, if so move onto next question 
    if(selected === correctAnswer) {
        statusEl.textContent = "Correct!";
        questionIndex++;
        // or if incorrect, minus 10 from the time left
    } else {
        statusEl.textContent = "Incorrect!";
        secondsLeft-=10;
    }

    // setTimeout sets a timer, and executes the function below once the timer expires. Used to clear the correct/incorrect status
    setTimeout(function(){
        statusEl.textContent = "";
    }, 1000);

    // if else statement that runs displayQuiz function if there are still questions left
    if(questionIndex < questions.length) {
        answerEl.textContent="";
        displayQuiz();
        // or finishes the quiz
    } else {
        done();
        answerEl.textContent="";
    }
}

// function that executes when the quiz is finished, displays message and time left
function done() {
    parentEl.textContent = "CodeMcQuizzy Vanguished!";
    childEl.style.display = "block";
    childEl.textContent = "You defeated CodeMcQuizzy in " + secondsLeft + " seconds!";
}