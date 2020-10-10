const easel = document.querySelector("#easel")

const pathList = document.querySelectorAll('.path');

console.log(pathList);

//pathList.item(Math.round(Math.random() * pathList.length)).classList.add('path-show');

const animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), 
    renderer: 'svg', // 描画形式
    loop: false, // trueにしたらループ。1回再生の場合はfalse
    autoplay: false, // 自動再生
    path: '/shared/json/star.json', // jsonのパスを指定
    name: "Star",
  });

  const socket = io();
  let diameter = 0;
  let diameter1 = 0;
  let diameter2 = 0;

  const addImage = (msg) => {
    //ボタン0が押されたときの処理
    //<img>要素を作成
    const img = new Image();
    img.src = "/shared/images/animated-" + msg + ".png";
    img.className = 'easel-img';
    img.style.top = Math.random() * 100 +'%';
    img.style.left = Math.random() * 100 +'%';

    //最後の子要素として<img>要素を追加
    easel.appendChild(img);
  };

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

  //RED 0
  socket.on('diameter',function(msg){
    console.log('サーバーから赤データを受信しました',msg);
    animation.goToAndPlay(0);
    diameter = msg;
  });

  //BLUE 1
  socket.on('diameter1',function(msg){
    console.log('サーバーから青データを受信しました',msg);
    diameter1 = msg;
  });

  //YELLOW 2
  socket.on('diameter2',function(msg){
    console.log('サーバーから黄データを受信しました',msg);
    diameter2 = msg;
  });

  function setup() { 
    createCanvas(640, 1080);
    }


  function draw() {
    createCanvas(640, 1080);

    fill(240, 0, 0);
    strokeJoin(ROUND);
    strokeWeight(10);
    stroke(240, 0, 0);
    rect(11, 0, 191, diameter);

    fill(0, 0, 240);
    strokeJoin(ROUND);
    strokeWeight(10);
    stroke(0, 0, 240);
    rect(216, 0, 191, diameter1);

    fill(240, 240, 0);
    strokeJoin(ROUND);
    strokeWeight(10);
    stroke(240, 240, 0);
    rect(422, 0, 191, diameter2);

  }
