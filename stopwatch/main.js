var seconds=00;
var tens=00;
var appendtens=document.querySelector("#tens");
var appendsec=document.querySelector("#second")
var buttonstart=document.querySelector(".start");
var buttonstop=document.querySelector(".stop");
var buttonreset=document.querySelector(".reset");
var interval;
buttonstart.onclick=function(){
    clearInterval(interval);
    interval=setInterval(starttimer,9)
    document.body.style.backgroundColor="green"
}
buttonstop.onclick=function(){
    clearInterval(interval);
}
buttonreset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00"
    appendtens.innerHTML=tens;
    appendsec.innerHTML=seconds;

}
function starttimer(){
    tens++;
    if(tens<=9){
        appendtens.innerHTML="0"+ tens
    }
    if(tens>9){
        appendtens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appendsec.innerHTML="0"+seconds;
        tens=0;
        appendtens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendsec.innerHTML = seconds;
    }
  
  }
  


    



