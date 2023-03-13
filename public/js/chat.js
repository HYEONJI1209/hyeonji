
/*chatting*/
/*채팅 보낼때 값이 사라지게하기 성공!
아무 값이 없을 때 안보내지게 하기는 됨*/

let chatPost=document.getElementById("chatPost")
let chatUser=document.getElementById("chatUser")
let chatSend=document.querySelector('.chatsend')


document.getElementById('chatUser').addEventListener('keydown',function(event){
    if(event.keyCode ==13){
    event.preventDefault();
        document.getElementById('chatPost').click();
    }
});
document.querySelector('.chatsend').addEventListener('click',function(){
    if(chatUser.value==""){
        chatSend=none;
    }
    document.getElementById('chatBot').value += '\n나 : '+document.getElementById('chatUser').value;
    chatUser.value=""
});
