const exp = require('constants');
const express = require('express');

const app = express();  //app 변수에 express 할당
app.set('port', process.env.PORT || 8080);  //서버가 실행될 포트 지정
//process.env.PORT는 process.env 객체에 기본 포트번호가 있으면 해당 포트 사용. 그렇지 않으면 8080포트 사용.
//app.set(키,값)은 키, 값 파라미터를 이용하여 키에 값을 저장하도록 설정할 수 있는 함수.

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/initial-srceen.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 서버 실행중..')
});