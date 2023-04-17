// aqui eu selcionei todos as tags do Html
const question= document.querySelector(".question");
const answers= document.querySelector(".answers");
const spnQtd= document.querySelector(".spnQtd");
const textFinish= document.querySelector(".finish span");
const content= document.querySelector(".content");
const contentFinish= document.querySelector(".finish");
const btnRestart= document.querySelector(".finish button");

//Aqui eu importei o javascript
import questions from  "./questions.js";

//Aqui eu zerei as variaveis
let currentIndex = 0;
let questionsCorrect= 0;

//Aqui eu coloquei uma ação para o botão de restart
btnRestart.onclick=()=>{
    content.style.display= "flex";
    contentFinish.style.display="none";

    currentIndex=0;
    questionsCorrect=0;
    loadQuestion();
};

//Aqui uma função que vai para a próxima pergunta
function nextQuestion(e){
    if( e.target.getAttribute("data-correct")=== "true"){
        questionsCorrect ++;
    }
    if(currentIndex < questions.length -1){
        currentIndex++;
        loadQuestion();
//Se as perguntas acabaram chamo a função  finish
    }else{
        finish();
    }
}
//aqui a função de final de Perguntas
function finish(){
    textFinish.innerHTML= `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display= "none";
    contentFinish.style.display= "flex";
}
//Aqui a função de início do programa
function loadQuestion(){
    spnQtd.innerHTML= `${currentIndex + 1}/${questions.length}`;
    const item= questions[currentIndex];
    answers.innerHTML= "";
    question.innerHTML= item.question;

    item.answers.forEach((answer) => {
        // Abaixo eu crio uma div no Html via script
        const div = document.createElement("div");
        
        div.innerHTML=`
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;
        //Aqui eu adiciono a div no Html
        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item)=>{
        //um click e vai para apróxima pergunta
        item.addEventListener("click",nextQuestion);
    });

}
//Aqui eu carrego o programa
loadQuestion();


