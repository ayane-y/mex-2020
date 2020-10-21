const express = require('express');
// http, path は最初からインストールされているライブラリなので $ npm install不要
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');
const app = express();
const httpServer = http.Server(app);
// httpServer を元に WebSocket（リアルタイム通信）用のIOを作成
const io = new SocketServer(httpServer);
const BUTTON_NUM = 58 //スマホのボタンの数

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

  for (let i = 0; i <  BUTTON_NUM; i++){
      //0
    // ユーザーからメッセージを受信した時の処理を.on で登録します
    socket.on(`button${i}Click`, (msg) => {
      // ユーザーからメッセージを受信した時の処理
      console.log(`ユーザーから${i}を受信しました`,msg);
      // このサーバーに接続しているユーザーに受信したメッセージを配信します
      io.emit(`button${i}Click`, msg);
    });
  }
});

httpServer.listen(3003, function(){
  console.log('サーバーが起動しました。URLは http://localhost:3003 です');
});