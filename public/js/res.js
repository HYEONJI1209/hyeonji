let successArea=document.getElementById("success-area")
let failArea=document.getElementById("fail-area")



const newsignup = () => {
    if(signup.id.value<10 ||signup.id>20){
        signup.id.focus();
        failArea.textContent="글자 수를 10이상 20이하로 해주세요"
        
        return false;
    }
    if(signup.pw.value == ""){
        alert("비밀번호를 입력하세요.");
        signup.pw.value.focus();
        return false;
    }
    if(signup.checkpw.value == ""){
        alert("비밀번호 확인란을 입력해주세요.");
        signup.checkpw.value.focus();
        return false;
    }
    if(signup.name.value == ""){
        alert("이름을 입력하세요.");
        signup.name.value.focus();
        return false;
    }
    if(signup.email.value == ""){
        alert("이메일을 입력하세요.");
        signup.email.value.focus();
        return false;
    }
    if(signup.shool.value == ""){
        alert("학교인증을 해주세요.");
        signup.school.value.focus();
        return false;
    }
    if(signup.birth.value == ""){
        alert("생년월일을 입력하세요");
        signup.birth.value.focus();
        return false;
    }
    location.href = "Index.html";
}