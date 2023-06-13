const num1=Math.ceil(Math.random()*20);
const num2=Math.ceil(Math.random()*20);
let question=document.getElementById('question');
question.innerHTML=`What is multiplication of ${num1} and ${num2} ?`;
let answer=num1*num2;
let input=document.getElementById('answer');
form=document.getElementById('form');
let scoreId=document.getElementById('score');
if(!score){
    score=0;
}
let score=JSON.parse(localStorage.getItem('score'));
scoreId.innerHTML=`Score:${score}`;

form.addEventListener('submit',()=>{
    let userAns=+input.value;
    if(userAns===answer){
        score++;
        updalteLocalScore()
    }else{
        score--;
        updalteLocalScore()
    }

});
alert(score)
function updalteLocalScore(){
    localStorage.setItem('score',JSON.stringify(score))
}
