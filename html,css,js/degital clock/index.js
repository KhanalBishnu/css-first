const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const sec=document.getElementById('second');
const ampm=document.getElementById('ampm');
function updateClok() {
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am="AM";
    if(h>12){
        h=h-12;
        am="PM";
    }
    if(h<10){
        h="0"+h;
    }
   if( m<10){
    m="0"+m;
   } 
    hour.innerText=h;
    minute.innerText=m;
    sec.innerText=s;
    ampm.innerText=am;

    setTimeout(()=>{
        updateClok()
    },1000);

}
updateClok();