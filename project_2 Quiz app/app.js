const questions = [
  {
  question: "Which Language runs in a web browser",
  answers:[
    { text: "Java", correct: false},
     { text: "C", correct: false},
      {text: "Python", correct: false},
      {text: "JavaScript", correct: true}

  ]
},
{
  question: "What does CSS stand for",
  answers:[
    { text: "cascading Style Sheet", correct: true},
     { text: "cara SUVS Sailhouse", correct: false},
      {text: "Central Style Sheet", correct: false},
      {text: "JavaScript", correct: false}

  ]
},{
question: "What year was JavaScript Launched?",
answers:[
  { text: "1996", correct: false},
   { text: "1984", correct: false},
    {text: "1974", correct: false},
    {text: "1995", correct: true}

]}
];


const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  // nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  console.log(questionElement);

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
     button.classList.add("btn")
     answerButtons.appendChild(button);
     if(answer.correct){
      button.dataset.correct = answer.correct;
     }
    button.addEventListener('click',selectAnswer)
  })

}

function resetState(){
  nextButton.style.display = "none"
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if(isCorrect){
    selectedBtn.classList.add("correct");
    score ++;
   }
   else{
    selectedBtn.classList.add("incorrect")
   }

Array.from(answerButtons.children).forEach(button =>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";

}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }
  else{
    showScore();
  }
};

nextButton.addEventListener('click', () => {
  if(currentQuestionIndex < questions.length){
        handleNextButton();
  }
  else{
    startQuiz();
  }
})
   
startQuiz();