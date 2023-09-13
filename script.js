



const questions = [
{
  questions : "what is a object?",
  answers:
  [ { text: "a type of global object that is used to store data", correct: false},{ text: "a collection of properties", correct: true},{ text: "a set of statements that performs a task or calculates a value", correct: false},{ text: "one that can either be TRUE or FALSE", correct: false}, ]
},

{questions : "what is an array?",
answers:
[ { text: "a type of global object that is used to store data.", correct: true},{ text: "a collection of properties", correct: false},{ text: "one that can either be TRUE or FALSE", correct: false},{ text: "a set of statements that performs a task or calculates a value", correct: false}, ]},

{questions : "what is a boolean?",
answers:
[ { text: "a set of statements that performs a task or calculates a value", correct: false},{ text: "a collection of properties", correct: false},{ text: "a object", correct: false},{ text: "one that can either be TRUE or FALSE", correct: true}, ]},

{questions : "what is a function?",
answers:
[ { text: "one that can either be TRUE or FALSE", correct: false},{ text: "a collection of properties", correct: false},{ text: "a set of statements that performs a task or calculates a value", correct: true},{ text: "a thing in JS that has a pre-set element", correct: false}, ]}

];

const questionsElement = document.getElementById("js-Question");
const answerButton = document.getElementById("answer-choices");
const nextButton = document.getElementById("nextbtn");
//for timer and start button
let timeLeft = document.querySelector(".time-left");
let count = 11;




let currentQuestionIndex = 0;
let score = 0;

const timerDisplay = () =>{
  countdown = setInterval(() =>{
    count--;
    timeLeft.innerHTML = `${count}s`;
    if(count === 0) {
      clearInterval(countdown);
      timerDisplay();
    }
  }, 1000)
};



function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"
  showQuestion();
 
}





function showQuestion() {

  resetState();

let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionsElement.innerHTML = questionNo + ". " + currentQuestion.questions;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButton.appendChild(button);

  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer)
}
);



}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
  }else{
    selectBtn.classList.add("wrong");
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

 

function showScore(){
  resetState();
  questionsElement.innerHTML = `Your got ${score} out of ${questions.length}! `;
  nextButton.innerHTML = "play again?";
  nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

   nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    } 
   })

   startQuiz();