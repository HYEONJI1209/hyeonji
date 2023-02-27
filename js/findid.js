let findidN = document.getElementById('name');
let findidP = document.getElementById('phone');
let findidBtn = document.getElementById('button');
let resultArea=document.getElementById("result-area");



findidBtn.addEventListener('click',color);
findidN.addEventListener("focus",replay);
findidp.addEventListener("focus",replay);

function color() {
    if((findidN.value.length>0 && findidN.value.length<5) && findidP.value.length>=11){
        findidBtn.disabled = false;
    }else{
        findidBtn.disabled = true;
        resultArea.textContent="다시입력해주세요"
        
    }
}

function replay(){
    findidBtn.disabled=false;
    resultArea.textContent=""
}
