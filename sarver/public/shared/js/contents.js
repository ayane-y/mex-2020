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

  socket.on('diameter',function(msg){
    console.log('サーバーから赤データを受信しました',msg);
    animation.goToAndPlay(0);
    diameter = msg;
  });

  socket.on('diameter1',function(msg){
    console.log('サーバーから青データを受信しました',msg);
    diameter1 = msg;
  });

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