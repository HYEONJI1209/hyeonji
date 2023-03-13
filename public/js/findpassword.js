const findpwCheck=()=>{
    //아이디가 빈칸이라면 경고 출력
    if(findpwForm.findpw_id.value==""){
        alert("아이디을 입력하세요");
        findpwForm.findpw_id.focus(); //포커스 커서 옮기기
        return false; //정상종료
    }
    //비밀번호가 빈칸이라면 경고 출력
    if(findpwForm.findpw_phone.value==""){
        alert("번호를 입력하세요");
        findpwForm.findpw_phone.focus(); //포커스 커서 옮기기
        return false; //정상종료
    }
    location.href="login.html";  //둘다 입력되면 Index.html로
}

