/*chatting*/


document.getElementById('chatUser').addEventListener('keydown',function(event){
    if(event.keyCode ==13){
    event.preventDefault();
        document.getElementById('chatPost').click();
    }
});
document.querySelector('.chatsend').addEventListener('click',function(){
    document.getElementById('chatBot').value += '\n나 : '+document.getElementById('chatUser').value;
});
