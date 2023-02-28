const loginCheck=()=>{
    //아이디가 빈칸이라면 경고 출력
    if(logForm.id.value==""){
        alert("아이디를 입력하세요");
        logForm.id.focus(); //포커스 커서 옮기기
        return false; //정상종료
    }
    //비밀번호가 빈칸이라면 경고 출력
    if(logForm.pw.value==""){
        alert("비밀번호를 입력하세요");
        logForm.pw.focus(); //포커스 커서 옮기기
        return false; //정상종료
    }
    logForm.submit();
}




let loginid = document.getElementById("id");
let loginpw = document.getElementById("pw");
let login = document.getElementById("BTN");
let resultArea=document.getElementById("result-area");



// login.addEventListener('click',color);
// loginid.addEventListener("focus",replay);
// loginpw.addEventListener("focus",replay);

// function color() {
//     if((loginid.value.length>0 && loginid.value.length<5) && loginpw.value.length>=11){
//         login.disabled = false;
//     }else{
//         login.disabled = true;
//         resultArea.textContent="다시입력해주세요"
        
//     }
// }

function replay(){
    login.disabled=false;
    resultArea.textContent=""
}