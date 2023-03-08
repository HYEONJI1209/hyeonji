const findidCheck=()=>{
    //아이디가 빈칸이라면 경고 출력
    if(findidForm.findid_name.value==""){
        alert("이름을 입력하세요");
        findidForm.findid_name.focus(); //포커스 커서 옮기기
        return false; //정상종료
    }
    //비밀번호가 빈칸이라면 경고 출력
    if(findidForm.findid_phone.value==""){
        alert("번호를 입력하세요");
        findidForm.findid_phone.focus(); //포커스 커서 옮기기
        return false; //정상종료
    }
    location.href="login.html";  //둘다 입력되면 Index.html로
}
