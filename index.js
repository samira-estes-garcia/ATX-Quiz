console.log("is working");

//Intro When button #start is pressed show question 
//Click on start, displays question and answer choices
function startQuiz () {
    $('#start').on('click', () => {
        $('.score-container').css("display", "block");
        $('#intro').css("display", "none");
        $('.quiz-container').css("display", "block");
        $('.questionNumber').text(1);
        displayQuestion();
    });
}

let questionNumber = 0; //tells us which question to render
let score = 0; //tells the score out of 10
$('.total-questions').text(STORE.length);

//create the question to be displayed
function createQuestion () {
    const currentQuestion = STORE[questionNumber];
    let resultHTML = "";
    resultHTML += `<div class="question-item">`;
    resultHTML += `<h1>${currentQuestion.question}</h1>`;
    resultHTML += `<form> <fieldset>`
    for (let i = 0; i < currentQuestion.answers.length; i++) 
    {
        resultHTML += `<label class="answer">
        <input type="radio" name="answer" value="${i}" required/> ${currentQuestion.answers[i]} 
        </label>`
    }
    resultHTML += `<button type="submit" class="submit">SUBMIT</button>`;
    resultHTML += `</fieldset> </form>`;
    resultHTML += `</div>`;
    return resultHTML;
}

$('body').on('submit', 'form', (event) => {
    event.preventDefault();
    console.log('button is working');
    incrementScore();
})

$('.continue').on('click', (event) => {
    $('.quiz-container').css('display', 'block');
    $('.quiz-feedback').css('display', 'none');
    incrementQuestionNum();
    if (questionNumber >= STORE.length) {
    //display final score on end screen
        displayFinish();
        $('.questionNumber').text(STORE.length);
    } else {
        displayQuestion()
    }
})

//display quiz in quiz container
function displayQuestion() {
    $('.quiz-container').html(createQuestion());
}


//increment questionNumber
function incrementQuestionNum () {
    questionNumber++;
    $('.questionNumber').text(questionNumber+1);
};


//finish quiz screen
function displayFinish () {
    displayResult();
}

//increment score
function incrementScore() {
    const selectedAnswer = $($('input:checked')[0]).val();
    const rightAnswer = STORE[questionNumber].correctAnswer;
    if (selectedAnswer == rightAnswer) {
        console.log(true);
        correctAnswer();
    } else {
        console.log(false);
        wrongAnswer();
    }
    console.log(selectedAnswer);
    console.log(rightAnswer);
}

// right answer score
function correctAnswer() {
    score++;
    $('.score').text(score);
    $('.quiz-container').css('display', 'none');
    $('.quiz-feedback-correct').css('display', 'flex');
    $('.correct-img').html(`<img src = ${STORE[questionNumber].icon} alt=${STORE[questionNumber].alt} />`)
}

// //wrong answer score
function wrongAnswer() {
    $('.score').text(score);
    $('.quiz-container').css('display', 'none');
    $('.quiz-feedback-wrong').css('display', 'flex');
    const correctAnswerPosition = STORE[questionNumber].correctAnswer;
    $('.right-answer').html(`The right answer is: ${STORE[questionNumber].answers[correctAnswerPosition]}`)
    $('.wrong-img').html(`<img src = ${STORE[questionNumber].icon} alt=${STORE[questionNumber].alt} />`)
}

//display results >7 == great job; 5-7 == you're on your way; <5 == brush up a little bit by visiting
function displayResult() {
    if (score >= 7) {
        $('.quiz-container').html(`<div class="quiz-result"><p>You got ${score}/${STORE.length}</p><h2>You're a true Austinite!</h2> <img src="https://flygv.com/wp-content/uploads/2018/05/Austin-TX.jpg" alt="Image of Austin, TX and the Texas flag" /> <button class="restart">Restart Quiz</button></div>`);
    } else if (score >= 5 && score < 7) {
        $('.quiz-container').html(`<div class="quiz-result"><p>You got ${score}/${STORE.length}</p><h2>You know a lot about Austin!</h2> <img src="https://localadventurer.com/wp-content/uploads/2017/06/greetings-from-austin-tx-mural.jpg" alt="Mural of Austin, TX" /> <button class="restart">Restart Quiz</button></div>`);
    } else if (score < 5) {
        $('.quiz-container').html(`<div class="quiz-result"><p>You got ${score}/${STORE.length}</p><h2>Come visit to learn more about Austin!</h2> <img src="https://medialibrarycdn.entrata.com/media_library/4682/Places-to-visit-in_1513629750.jpg" alt="Image of Austin skyline with the text Austin, TX" /> <button class="restart">Restart Quiz</button></div>`);
    }
}

//restart the quiz
function restartQuiz() {
    $('body').on('click', '.restart', (event) => {
        questionNumber = 0;
        score = 0;
        $('.questionNumber').text(1);
        $('.score').text(0);
        $('.quiz-result').html(``);
        $('.score-container').css("display", "none");
        $('#intro').css("display", "block");
        $('.quiz-container').css("display", "none");
        displayQuestion();
    });
}

function createQuiz () {
    startQuiz();
    displayQuestion();
    restartQuiz();
};

$(createQuiz);

//responsive and css
//push to github