const exp = require('constants');
const express = require('express');

const app = express();  //app 변수에 express 할당
app.set('port', process.env.PORT || 8080);  //서버가 실행될 포트 지정
//process.env.PORT는 process.env 객체에 기본 포트번호가 있으면 해당 포트 사용. 그렇지 않으면 8080포트 사용.
//app.set(키,값)은 키, 값 파라미터를 이용하여 키에 값을 저장하도록 설정할 수 있는 함수.

app.use(express.static(__dirname+'/public'));

//router
app.get('/', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/initial-srceen.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/index', (req, res)=>{
    res.sendFile(__dirname + '/public/html/Index.html');
});
app.get('/board', (req, res)=>{
    res.sendFile(__dirname + '/public/html/board.html');
});
app.get('/findid', (req, res)=>{
    res.sendFile(__dirname + '/public/html/findid.html');
});
app.get('/findpw', (req, res)=>{
    res.sendFile(__dirname + '/public/html/findpassword.html');
});
app.get('/groupNo', (req, res)=>{
    res.sendFile(__dirname + '/public/html/group-notice.html');
});
app.get('/group', (req, res)=>{
    res.sendFile(__dirname + '/public/html/group.html');
});
app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/public/html/login.html');
});
app.get('/map', (req, res)=>{
    res.sendFile(__dirname + '/public/html/map.html');
});
app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/public/html/res.html');
});
app.get('/table', (req, res)=>{
    res.sendFile(__dirname + '/public/html/table.html');
});
//server start
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 서버 실행중..')
});