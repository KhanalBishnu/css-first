let text=document.getElementById('input');
text.addEventListener('input',()=>{
    let char=text.value.length;
    document.getElementById('count_char').innerHTML=char;
    document.getElementById('rem_coount').innerHTML=100-char;
    if(char==100 || char==0){

        setTimeout(()=>{
        document.getElementById('count_char').innerHTML='';
        document.getElementById('rem_coount').innerHTML='';

        },500);
    }
    let word=text.value.trim();
    let word_space=word.split(" ");
    let final_word=word_space.filter(function(e){
        return e!="";
    })
    document.getElementById('count_word').innerHTML=final_word.length;

});