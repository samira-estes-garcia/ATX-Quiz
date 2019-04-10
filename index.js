console.log("is working");

//Intro When button #start is pressed show question 
$('#start').on('click', () => {
    $('#question').css("display", "block");
    $('#answers').css("display","block");
    $('#intro').css("display", "none");
});

let count = 0; //tells us which question to render
let score = 0; //tells the score out of 10



//Question 
//Need an array: objects, first object is a question number, plus question content, all choices, 
const questionArray = [
    {
        question: "what is this color",
        answers: ["red", "blue", "green", "orange"],
        correctAnswer: "blue"
    },
    {
        question: "what is this color",
        answers: ["red", "blue", "green", "orange"],
        correctAnswer: "green"
    },
    {
        question: "what is this color",
        answers: ["red", "blue", "green", "orange"],
        correctAnswer: "red"
    }
];

//Click on start, displays question and answer choices

//When you select a choice and click the next button > will tell you whether the answer is right or not
    //If its right, say you got it right and advance to the next question, increase the score
    //if its not right, inform the user they got it wrong, tell them the right answer, and advance to next question

//When you finish all the questions, it would display your score
//end = questionArray.length, 
//If it's the last question, show the finish page, else render the next question