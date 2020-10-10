const express = require('express');
// http, path は最初からインストールされているライブラリなので $ npm install不要
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');
const app = express();
const httpServer = http.Server(app);
// httpServer を元に WebSocket（リアルタイム通信）用のIOを作成
const io = new SocketServer(httpServer);

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


  //0
  // ユーザーからメッセージを受信した時の処理を.on で登録します
	socket.on('button0Click', (msg) => {
		// ユーザーからメッセージを受信した時の処理
		console.log('ユーザーから0を受信しました',msg);
		// このサーバーに接続しているユーザーに受信したメッセージを配信します
		io.emit('button0Click', msg);
  });
    
//1
  socket.on('button1Click',(msg) =>{
    console.log('ユーザーから1を受信しました',msg);
    io.emit('button1Click',msg);
  });

  //2
  socket.on('button2Click',(msg) =>{
    console.log('ユーザーから2を受信しました',msg);
    io.emit('button2Click',msg);
  });

  //3
  socket.on('button3Click',(msg) =>{
    console.log('ユーザーから3を受信しました',msg);
    io.emit('button3Click',msg);
  });

  //4
  socket.on('button4Click',(msg) =>{
    console.log('ユーザーから4を受信しました',msg);
    io.emit('button4Click',msg);
  });

  //5
  socket.on('button5Click',(msg) =>{
    console.log('ユーザーから5を受信しました',msg);
    io.emit('button5Click',msg);
  });

  //6
  socket.on('button6Click',(msg) =>{
    console.log('ユーザーから6を受信しました',msg);
    io.emit('button6Click',msg);
  });

  //7
  socket.on('button7Click',(msg) =>{
    console.log('ユーザーから7を受信しました',msg);
    io.emit('button7Click',msg);
  });

  //8
  socket.on('button8Click',(msg) =>{
    console.log('ユーザーから8を受信しました',msg);
    io.emit('button8Click',msg);
  });

  //9
  socket.on('button9Click',(msg) =>{
    console.log('ユーザーから9を受信しました',msg);
    io.emit('button9Click',msg);
  });

  //10
  socket.on('button10Click',(msg) =>{
    console.log('ユーザーから10を受信しました',msg);
    io.emit('button10Click',msg);
  });

  //11
  socket.on('button11Click',(msg) =>{
    console.log('ユーザーから11を受信しました',msg);
    io.emit('button11Click',msg);
  });

  //12
  socket.on('button12Click',(msg) =>{
    console.log('ユーザーから12を受信しました',msg);
    io.emit('button12Click',msg);
  });

  //13
  socket.on('button13Click',(msg) =>{
    console.log('ユーザーから13を受信しました',msg);
    io.emit('button13Click',msg);
  });

  //14
  socket.on('button14Click',(msg) =>{
    console.log('ユーザーから14を受信しました',msg);
    io.emit('button14Click',msg);
  });

  //15
  socket.on('button15Click',(msg) =>{
    console.log('ユーザーから15を受信しました',msg);
    io.emit('button15Click',msg);
  });

  //16
  socket.on('button16Click',(msg) =>{
    console.log('ユーザーから16を受信しました',msg);
    io.emit('button16Click',msg);
  });

  //17
  socket.on('button17Click',(msg) =>{
    console.log('ユーザーから17を受信しました',msg);
    io.emit('button17Click',msg);
  });

  //18
  socket.on('button18Click',(msg) =>{
    console.log('ユーザーから18を受信しました',msg);
    io.emit('button18Click',msg);
  });

  //19
  socket.on('button19Click',(msg) =>{
    console.log('ユーザーから19を受信しました',msg);
    io.emit('button19Click',msg);
  });

  //20
  socket.on('button20Click',(msg) =>{
    console.log('ユーザーから20を受信しました',msg);
    io.emit('button20Click',msg);
  });

  //21
  socket.on('button21Click',(msg) =>{
    console.log('ユーザーから21を受信しました',msg);
    io.emit('button21Click',msg);
  });

  //22
  socket.on('button22Click',(msg) =>{
    console.log('ユーザーから22を受信しました',msg);
    io.emit('button22Click',msg);
  });

  //23
  socket.on('button23Click',(msg) =>{
    console.log('ユーザーから23を受信しました',msg);
    io.emit('button23Click',msg);
  });

  //24
  socket.on('button24Click',(msg) =>{
    console.log('ユーザーから24を受信しました',msg);
    io.emit('button24Click',msg);
  });

  //25
  socket.on('button25Click',(msg) =>{
    console.log('ユーザーから25を受信しました',msg);
    io.emit('button25Click',msg);
  });

  //26
  socket.on('button26Click',(msg) =>{
    console.log('ユーザーから26を受信しました',msg);
    io.emit('button26Click',msg);
  });

  //27
  socket.on('button27Click',(msg) =>{
    console.log('ユーザーから27を受信しました',msg);
    io.emit('button27Click',msg);
  });

  //28
  socket.on('button28Click',(msg) =>{
    console.log('ユーザーから28を受信しました',msg);
    io.emit('button28Click',msg);
  });

});

httpServer.listen(3003, function(){
  console.log('サーバーが起動しました。URLは http://localhost:3003 です');
});