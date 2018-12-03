$(document).ready(function () {
    // define global variables
    // questions/answers object array
    var trivia = [
        {
            question: "What type of galaxy is the most common in the universe?",
            answers: ["Elliptical", "Irregular", "Spherical", "Spirals"],
            correctAnswer: 0
        },
        {
            question: "What percent of the universe is dark matter?",
            answers: ["35%", "14%", "27%", "48%"],
            correctAnswer: 2
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: ["Earth", "Jupiter", "Saturn", "Uranus"],
            correctAnswer: 1
        },
        {
            question: "What is the most common type of star found in the Milky Way?",
            answers: ["Red dwarf stars", "Yellow dwarf stars", "Orange dwarf star", "Blue supergiant stars"],
            correctAnswer: 0
        },
        {
            question: "What has a gravitational pull so strong that even light cannot escape it?",
            answers: ["Nebula", "Star", "Black hole", "Supernova"],
            correctAnswer: 2
        },
        {
            question: "How old is the universe in light years?",
            answers: ["42 million", "21.7 billion", "117.1 billion", "13.8 billion"],
            correctAnswer: 3
        },
        {
            question: "What is the smallest planet in our solar system?",
            answers: ["Venus", "Earth", "Mars", "Mercury"],
            correctAnswer: 3
        },
        {
            question: "What is the coldest place in the universe?",
            answers: ["My heart", "The Boomerang Nebula", "Andromeda Galaxy", "Messier 87"],
            correctAnswer: 1
        },
        {
            question: "Which is the largest moon in our solar system?",
            answers: ["Europa", "Charon", "Ganymede", "Triton"],
            correctAnswer: 2
        },
        {
            question: "How many moons are in our solar system?",
            answers: ["181", "129", "213", "97"],
            correctAnswer: 0
        },
    ];
    var count = 0;                  // index of question displayed
    var correctAnswers = 0;         // number of correct answers
    var incorrectAnswers = 0;       // number of incorrect answers
    var unanswered = 0;             // number of unanswered questions
    var showQuestion;               // hold setInterval
    var timer = 10;                 // max timer count

    // start game 
    $("#start").click(function () {
        // hide start button
        $(this).hide();

        // clear scores
        $("#score").empty();
        correctAnswers = 0;         // number of correct answers
        incorrectAnswers = 0;       // number of incorrect answers
        unanswered = 0;

        // display question and set timer
        displayTrivia();
        timer = 10;
        setTimer();
    });

    // set timer
    function setTimer() {
        showQuestion = setInterval(decreaseTimer, 1000);
    }

    // decrease timer
    function decreaseTimer() {
        // display countdown
        $("#timer").html("Time remaining: " + timer);
        
        // decrease timer
        timer--;
        
        // stop timer at 0
        if (timer <= 0) {
            unanswered++;
            stopTimer();
            
            // display message and correct answer
            $("#message").text("Too slow, time's up! The correct answer is: " + trivia[count].correctAnswer);
            console.log(unanswered);
            
            // display next question
            nextTrivia();
        }
    }

    // stop timer
    function stopTimer() {
        clearInterval(showQuestion);
    }

    // display trivia question
    function displayTrivia() {
        // display question in trivia array
        $("#question").html(trivia[count].question);
        
        // display answers array
        for (var i = 0; i < trivia[count].answers.length; i++) {
            var p = $("<p>");
            p.addClass("answerOption");
            p.text(trivia[count].answers[i]);
            p.attr("data-value", i);
            $("#answers").append(p);
        }

        // get user input
        $(".answerOption").on("click", function () {
            // store answers array position of user guess
            var userGuess = parseInt($(this).attr("data-value"));
            console.log(userGuess);

            // check if correct
            if (userGuess === trivia[count].correctAnswer) {
                stopTimer();
                correctAnswers++;
                $("#message").text("Congrats, it's correct!");
                console.log(correctAnswers);

                // display next trivia question
                nextTrivia();
            }

            // if incorrect
            else {
                stopTimer();
                incorrectAnswers++;
                $("#message").text("Wrong...the correct answer is: " + trivia[count].correctAnswer);
                console.log(incorrectAnswers);

                // display next trivia question
                nextTrivia();
            }
        });
    }

    // display next question
    function nextTrivia() {
        count++;

        // end game at end of trivia array
        if (count === trivia.length) {
            count = 0;
            endGame();
        }

        // reset for next question
        else {
            reset();
        }
    }

    // clear question/answer/message text and reset timer
    function reset() {
        setTimeout(function() {
            // clear answer div
            $("#answers").empty();
            // clear message div
            $("#message").empty();
            // clear timer div
            $("#timer").empty();
            
            // reset timer and display next question
            timer = 10;
            setTimer();
            displayTrivia();
        }, 3000);
    }
    
    // display final screen
    function endGame() {
        // clear question div
        $("#question").empty();
        // clear answer div
        $("#answers").empty();
        // clear message div
        $("#message").empty();
        // clear timer div
        $("#timer").empty();
        // reset timer

        // display final score
        $("#score").append("<p>Correct answers: " + correctAnswers + "</p>");
        $("#score").append("<p>Incorrect answers: " + incorrectAnswers + "</p>");
        $("#score").append("<p>Unanswered: " + unanswered + "</p>");
        
        // display start button
        $("#start").show();
    }

});
