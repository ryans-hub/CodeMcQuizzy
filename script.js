var challengeBtn = document.querySelector("#challenge");

var timeEl = document.querySelector(".time");

challengeBtn.addEventListener("click", startTimer);

var secondsLeft = 75;

function startTimer() { 

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

        
    });

}

