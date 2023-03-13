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
app.get('/index', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/Index.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/board', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/board.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/findid', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/findid.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/findpw', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/findpassword.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/groupNo', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/group-notice.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/group', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/group.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/login', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/login.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/map', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/map.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/register', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/res.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
app.get('/table', (req, res)=>{  //app.get 함수를 통해 가져옴
    res.sendFile(__dirname + '/public/html/table.html');   //fs모듈에서의 .readFile() 대신 sendFile() 사용 가능
});
//server start
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 서버 실행중..')
});