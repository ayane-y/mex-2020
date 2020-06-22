const express = require('express');
const http = require('http');

const app = express();
const httpServer = http.Server(app);

app.get('/',function(req,res){
    res.send('トップページ');
});

app.get('/test',function(req,res){
    res.send('テストページ');
});

httpServer.listen(3000,function(){
    console.log('サーバーを起動しました。');
});

