const pathList = document.querySelectorAll('.path');

console.log(pathList);

//pathList.item(Math.round(Math.random() * pathList.length)).classList.add('path-show');

  const socket = io();

  var reset = function(){
    console.log('リセットします');
  };

  setInterval( reset, 1000 * 10 );

  socket.on('button0Click',function(msg){
    pathList.item(0).classList.add('path-show');
  });

  socket.on('button1Click',function(msg){
    pathList.item(1).classList.add('path-show');
  });

  socket.on('button2Click',function(msg){
    pathList.item(2).classList.add('path-show');
  });

  socket.on('button3Click',function(msg){
    pathList.item(3).classList.add('path-show');
  });

  socket.on('button4Click',function(msg){
    pathList.item(4).classList.add('path-show');
  });

  socket.on('button5Click',function(msg){
    pathList.item(5).classList.add('path-show');
  });

  socket.on('button6Click',function(msg){
    pathList.item(6).classList.add('path-show');
  });

  socket.on('button7Click',function(msg){
    pathList.item(7).classList.add('path-show');
  });

  socket.on('button8Click',function(msg){
    pathList.item(8).classList.add('path-show');
  });

  socket.on('button9Click',function(msg){
    pathList.item(9).classList.add('path-show');
  });

  socket.on('button10Click',function(msg){
    pathList.item(10).classList.add('path-show');
  });

  socket.on('button11Click',function(msg){
    pathList.item(11).classList.add('path-show');
  });

  socket.on('button12Click',function(msg){
    pathList.item(12).classList.add('path-show');
  });

  socket.on('button13Click',function(msg){
    pathList.item(13).classList.add('path-show');
  });

  socket.on('button14Click',function(msg){
    pathList.item(14).classList.add('path-show');
  });

  socket.on('button15Click',function(msg){
    pathList.item(15).classList.add('path-show');
  });

  socket.on('button16Click',function(msg){
    pathList.item(16).classList.add('path-show');
  });

  socket.on('button17Click',function(msg){
    pathList.item(17).classList.add('path-show');
  });

  socket.on('button18Click',function(msg){
    pathList.item(18).classList.add('path-show');
  });

  socket.on('button19Click',function(msg){
    pathList.item(19).classList.add('path-show');
  });

  socket.on('button20Click',function(msg){
    pathList.item(20).classList.add('path-show');
  });

  socket.on('button21Click',function(msg){
    pathList.item(21).classList.add('path-show');
  });

  socket.on('button22Click',function(msg){
    pathList.item(22).classList.add('path-show');
  });

  socket.on('button23Click',function(msg){
    pathList.item(23).classList.add('path-show');
  });

  socket.on('button24Click',function(msg){
    pathList.item(24).classList.add('path-show');
  });

  socket.on('button25Click',function(msg){
    pathList.item(25).classList.add('path-show');
  });

  socket.on('button26Click',function(msg){
    pathList.item(26).classList.add('path-show');
  });

  socket.on('button27Click',function(msg){
    pathList.item(27).classList.add('path-show');
  });

  socket.on('button28Click',function(msg){
    pathList.item(28).classList.add('path-show');
  });