const questionContainer=document.getElementById('question-container');
const questionElement=document.getElementById('question');
const answerBtn=document.getElementById("answer-btn");
const startBtn=document.getElementById("start-btn");
const nextBtn=document.getElementById('next-btn');
const h=document.getElementById('h');

startBtn.addEventListener('click',startGame);
nextBtn.addEventListener('click',()=>{
    currectIndex++;
    nextQuest();

 })
  let currectIndex, shffeledQuest;

 
 
function startGame(){
   clearState(document.body)
    startBtn.classList.add('hide');
   shffeledQuest=questions.sort(()=>
             { const value=Math.random()-0.5;
             console.log(value)});
currectIndex=0; 
 questionContainer.classList.remove('hide');
             nextQuest();
   
}

function  nextQuest(){

    clearButtons();
    showQuest(shffeledQuest[currectIndex]);
}

function showQuest(question){
         
   
    questionElement.innerText=question.question; 
    
    question.answer.forEach((answer) => {
        const button=document.createElement('button');
        button.innerText=answer.text;
        if(answer.currect){
          button.dataset.currect=answer.currect;  
        }
        button.classList.add('btn');
        answerBtn.appendChild(button);
        button.addEventListener('click',showAnswer);
    });
    
}



 function clearButtons(){
       nextBtn.classList.add('hide');
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
 }


function showAnswer(e){
    const value=e.target;
    const currect=value.dataset.currect;
    console.log(value);
    changeColor(document.body,currect);
    result(currect);
  
 Array.from(answerBtn.children).forEach((button)=>{
     changeColor(button,button.dataset.currect);

 });   

if(shffeledQuest.length > currectIndex+1){
    nextBtn.classList.remove('hide');
}
else{
    startBtn.innerText='restart';
    startBtn.classList.remove('hide');
}
}

  function clearState(element){
   element.classList.remove('wrong');
   element.classList.remove('correct');
}  

function changeColor(element,currect){
   
    console.log(currect);
    clearState(element);
    if(currect){
       
        element.style.background="green";
    }else{
       
        element.style.background="red";
    }

}

function result(correct){

    if(correct){
       
       h.innerText='correct';
       h.classList.add('h1');
    }else{
        h.innerText='wrong';
        h.classList.add('h1');
       
    }

}




const questions=[

    {
        question:'1.body of web devlopment',
        answer:[{text:'css',currect:false},{text:'html',currect:true},
        {text:'js',currect:false},{text:'react',currect:false}],
    },
    {
        question:'2.html vertion',
        answer:[{text:'4',currect:false},{text:'5',currect:true},
        {text:'10',currect:false},{text:'11',currect:false}],
    },
    {
        question:'3. what is html',
        answer:[{text:'hyper text markup language',currect:true},{text:'programming language',currect:false},
        {text:'framwork',currect:false},{text:'laibrari',currect:false}],
    },
    {
        question:'4.which simple is use to connect id',
        answer:[{text:'@',currect:false},{text:'#',currect:true},
        {text:'&',currect:false},{text:'$',currect:false}],
    },
    {
        question:'5.type of react',
        answer:[{text:'native,js',currect:true},{text:'html,css',currect:false},
        {text:'native,css',currect:false},{text:'js,html',currect:false}],
    },
    {
        question:'6.sql use in',
        answer:[{text:'frontend',currect:false},{text:'others',currect:false},
        {text:'server',currect:false},{text:'database',currect:true}],
    },
    {
        question:'7.back end language',
        answer:[{text:'css',currect:false},{text:'php',currect:true},
        {text:'js',currect:false},{text:'react',currect:false}],
    },
    {
        question:'8.css verstion',
        answer:[{text:'4',currect:false},{text:'5',currect:false},
        {text:'1',currect:false},{text:'3',currect:true}],
    },
    {
        question:'9.js full form',
        answer:[{text:'javaScript',currect:true},{text:'java',currect:false},
        {text:'javas',currect:false},{text:'js',currect:false}],
    },
    {
        question:'10.which tag is use to connect css external file',
        answer:[{text:'<body>',currect:false},{text:'<script>',currect:false},
        {text:'<link>',currect:true},{text:'<style>',currect:false}],
    },
    
 
];

