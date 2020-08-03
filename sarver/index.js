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
  
//RED
  // ユーザーからメッセージを受信した時の処理を.on で登録します
	socket.on('button0Click', (msg) => {
		// ユーザーからメッセージを受信した時の処理
		console.log('ユーザーからの赤メッセージを受信しました',msg);
		// このサーバーに接続しているユーザーに受信したメッセージを配信します
		io.emit('button0Click', msg = 'R');
  });

  socket.on('diameter',(msg) =>{
    console.log('ユーザーからの赤の高さを受信しました',msg);
    diameter = diameter + 100;
    io.emit('diameter',diameter);
  });

    
//BLUE
  socket.on('button1Click',(msg) =>{
    console.log('ユーザーからの青メッセージを受信しました',msg);
    io.emit('button1Click',msg = 'B');
  });

  socket.on('diameter1',(msg) =>{
    console.log('ユーザーからの青の高さを受信しました',msg);
    diameter1 = diameter1 + 100;
    io.emit('diameter1',diameter1);
  });

  //YELLOW
  socket.on('button2Click',(msg) =>{
    console.log('ユーザーからの黄メッセージを受信しました',msg);
    io.emit('button2Click',msg = 'Y');
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
});

httpServer.listen(3003, function(){
  console.log('サーバーが起動しました。URLは http://localhost:3003 です');
});