let findpwN = document.getElementById('id');
let findpwP = document.getElementById('phone');
let findpwBtn = document.getElementById('BTN');
let resultArea=document.getElementById("result-area");


findpwBtn.addEventListener('click',color);
findpwN.addEventListener("focus",replay);
findpwP.addEventListener("focus",replay);

function color() {
    if((findpwN.value.length>0 && findpwN.value.length<5) && findpwP.value.length>=11){
        findpwBtn.disabled = false;
    }else{
        findpwBtn.disabled = true;
        resultArea.textContent="다시입력해주세요"
        
    }
}

function replay(){
    findpwBtn.disabled=false;
    resultArea.textContent=""
}
