$(document).ready(function() {
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


// start game 
$("#start").click(function() {
    $(this).hide();
    displayTrivia();
    showQuestion = setInterval(setTimer, 1000);
});

// set timer & display countdown
function setTimer() {
    
}

// display trivia question
function displayTrivia() {
    // display question in trivia array
    $("#question").html(trivia[count].question);
    // display answers array
    for (var i = 0; i < trivia[count].answers.length; i++) {
        var p = $("<p>");
        p.addClass("answerOption");
        p.attr("data-value", i);
        p.text(trivia[count].answers[i]);
        $("#answers").append(p);
    }
}

// get user input: correct answer, incorrect answer, timer runs out

// display next question

// display final screen

});
