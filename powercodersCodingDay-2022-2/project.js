

let quiz = [
    {
        question:"Which built-in method combines the text of two strings and returns a new string?",
        answers:["attach()","append()","concat()","None of the above"],
        correctAnswer:2
    },
    {
        question:"Which of the following function of Number object returns a string value version of the current number?",
        answers:["toPrecision()","toLocaleString()","toFixed()","toString()"],
        correctAnswer:3
    },
    {
        question:"Which of the following function of String object returns the calling string value converted to lower case?",
        answers:["toLowerCase()","toLocaleLowerCase()","substring()"],
        correctAnswer:0
    },
    {
        question:"Which of the following function of Array object joins all elements of an array into a string?",
        answers:["concat()","join()","pop()","map()"],
        correctAnswer:1
    },
    {
        question:"Which of the following function of Array object reverses the order of the elements of an array?",
        answers:["reduceRight()","reduce()","push()","reverse()"],
        correctAnswer:3
    }
]
const NUMBEROFQUESTIONS = quiz.length;
let score = 0;

let questionIsShown = -1;

let questionSection = document.getElementById("questions");
let questionTxt = document.getElementById("questionTxt");
let message = document.getElementById("message");
let scoreBoard = document.getElementById("scoreBoard");
let answersTxt = document.querySelectorAll("#answers article");


function generateRandomIndex(){
    let x = Math.floor(Math.random() * NUMBEROFQUESTIONS);
    return x;
}

function showQuestion(){
    // if we get a random number already used we should generate again
    let x = generateRandomIndex();
    let randomQuestion = quiz[x];
    questionIsShown = x;
    questionTxt.innerHTML = randomQuestion.question;
    for (let i = 0; i < randomQuestion.answers.length; i++) {
        answersTxt[i].innerHTML = randomQuestion.answers[i];
        answersTxt[i].addEventListener("click", ()=>{answerClicked(i)});
    }
}

function answerClicked(index){
    if(quiz[questionIsShown].correctAnswer == index){
        message.innerText = "Correct Answer🤩";
        score+= 10;
    }
    else {
        message.innerText = "Wrong Answer😞";
        scoreBoard.style.display = "none";
    }

    showScore();
}

function showScore(){
    scoreBoard.innerText = "Your Final Score is " + score;
}

showQuestion();