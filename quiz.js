var quizForm =document.querySelector(".quiz-form");
var submitAnswer=document.querySelector("#submit-btn-answer")
var output = document.querySelector("#output")

var correctAnswer = ["90°", "right angle","right","2 congruent sides","Equilateral triangle"];



function calculateScore () {
    let score=0;
    let index=0;
    var formresult= new FormData(quizForm)
    for(let value of formresult.values()){
        if(value===correctAnswer[index]){
            score=score+1;
        }
        index=index+1;

    }
    output.innerText="Your Score is " + score;
}

submitAnswer.addEventListener("click",calculateScore);
