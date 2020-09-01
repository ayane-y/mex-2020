const express = require('express');
// http, path は最初からインストールされているライブラリなので $ npm install不要
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');
const app = express();
const httpServer = http.Server(app);
// httpServer を元に WebSocket（リアルタイム通信）用のIOを作成
const io = new SocketServer(httpServer);

let diameter = 0;
let diameter1 = 0;
let diameter2 = 0;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // ひとつ上のディレクトリにある index.html を返します
  const file = path.join(__dirname, '../index.html');
  res.sendFile(file);
});

app.get('/contents', (req, res) => {
  // ひとつ上のディレクトリにある contents.html を返します
  const file = path.join(__dirname, '../contents.html');
  res.sendFile(file);
});

app.get('/test', (req, res) => {
  res.send('test');
});

io.on('connection', (socket) => {
	// ユーザーが新規に接続された時にこの中が実行されます
  console.log('ユーザーが接続しました');
  
//RED 0
  // ユーザーからメッセージを受信した時の処理を.on で登録します
	socket.on('button0Click', (msg) => {
		// ユーザーからメッセージを受信した時の処理
		console.log('ユーザーから0を受信しました',msg);
		// このサーバーに接続しているユーザーに受信したメッセージを配信します
		io.emit('button0Click', msg = '0');
  });

  socket.on('diameter',(msg) =>{
    console.log('ユーザーからの赤の高さを受信しました',msg);
    diameter = diameter + 100;
    io.emit('diameter',diameter);
  });

    
//BLUE 1
  socket.on('button1Click',(msg) =>{
    console.log('ユーザーから1を受信しました',msg);
    io.emit('button1Click',msg = '1');
  });

  socket.on('diameter1',(msg) =>{
    console.log('ユーザーからの青の高さを受信しました',msg);
    diameter1 = diameter1 + 100;
    io.emit('diameter1',diameter1);
  });

  //YELLOW 2
  socket.on('button2Click',(msg) =>{
    console.log('ユーザーから2を受信しました',msg);
    io.emit('button2Click',msg = '2');
  });

  socket.on('diameter2',(msg) =>{
    console.log('ユーザーからの黄の高さを受信しました',msg);
    diameter2 = diameter2 + 100;
    io.emit('diameter2',diameter2);
  });

  var reset = function(){
    console.log('リセットします');

    diameter = diameter = 0;
    io.emit('diameter',diameter);

    diameter1 = diameter1 = 0;
    io.emit('diameter1',diameter1);

    diameter2 = diameter2 = 0;
    io.emit('diameter2',diameter2);
  };
  
  //setInterval( reset, 1000 * 20 );

  //3
  socket.on('button3Click',(msg) =>{
    console.log('ユーザーから3を受信しました',msg);
    io.emit('button3Click',msg = '3');
  });

  //4
  socket.on('button4Click',(msg) =>{
    console.log('ユーザーから4を受信しました',msg);
    io.emit('button4Click',msg = '4');
  });

  //5
  socket.on('button5Click',(msg) =>{
    console.log('ユーザーから5を受信しました',msg);
    io.emit('button5Click',msg = '5');
  });

  //6
  socket.on('button6Click',(msg) =>{
    console.log('ユーザーから6を受信しました',msg);
    io.emit('button6Click',msg = '6');
  });

  //7
  socket.on('button7Click',(msg) =>{
    console.log('ユーザーから7を受信しました',msg);
    io.emit('button7Click',msg = '7');
  });

  //8
  socket.on('button8Click',(msg) =>{
    console.log('ユーザーから8を受信しました',msg);
    io.emit('button8Click',msg = '8');
  });

  //9
  socket.on('button9Click',(msg) =>{
    console.log('ユーザーから9を受信しました',msg);
    io.emit('button9Click',msg = '9');
  });

  //10
  socket.on('button10Click',(msg) =>{
    console.log('ユーザーから10を受信しました',msg);
    io.emit('button10Click',msg = '10');
  });


});

httpServer.listen(3003, function(){
  console.log('サーバーが起動しました。URLは http://localhost:3003 です');
});