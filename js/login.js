
let loginid = document.getElementById("id");
let loginpw = document.getElementById("pw");
let login = document.getElementById("BTN");
let resultArea=document.getElementById("result-area");



login.addEventListener('click',color);
loginid.addEventListener("focus",replay);
loginpw.addEventListener("focus",replay);

function color() {
    if((loginid.value.length>0 && loginid.value.length<5) && loginpw.value.length>=11){
        login.disabled = false;
    }else{
        login.disabled = true;
        resultArea.textContent="다시입력해주세요"
        
    }
}

function replay(){
    login.disabled=false;
    resultArea.textContent=""
}

$(function () {
    // 눈표시 클릭 시 패스워드 보이기
    $('.eyes').on('click', function () {
        $('.input.password').toggleClass('active');

        if ($('.input.password').hasClass('active') == true) {
            $(this).find('.fa-eye').attr('class', "fa fa-eye-slash fa-lg").parents('.input').find('#password').attr('type', "text");
            // i 클래스                // 텍스트 보이기 i 클래스
        }
        else {
            $(this).find('.fa-eye-slash').attr('class', "fa fa-eye fa-lg").parents('.input').find('#password').attr('type', 'password');
        }
    });
});
