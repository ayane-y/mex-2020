const pathList = document.querySelectorAll('.path');

console.log(pathList);

//pathList.item(Math.round(Math.random() * pathList.length)).classList.add('path-show');

const socket = io();

//アニメーションが始まる前の見た目を設定する
gsap.set(pathList,{
  scale: 0,//縮尺を０倍にする
  opacity: 0,//透明にする
  transformOrigin: "50% 50%",//変形の基点を図形の重心にする
});

for (let i = 0; i < pathList.length; i++){
  socket.on(`button${i}Click`,(msg) => {
    //ボタンが連打されたとき
    //すでにアニメーション中であったら古いアニメーションを破棄する
    gsap.killTweensOf(pathList.item(i));

    //ボタンが押されたタイミングで見た目をリセットする
    gsap.set(pathList.item(i),{
      scale: 0,
      opacity: 0,
    });    

    gsap.to(
      //動かしたい要素や素材
      pathList.item(i),{
        duration: 0.2, //アニメーションする時間
        scale: 1,
        opacity: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          //消える時のアニメーションを書く
          gsap.to(
            pathList.item(i),{
              delay: 3,//　何秒後にこのアニメーションを始めるか
              duration: 0.4,
              opacity: 0,
              ease: "power2.inOut",
            }
          );
        }
      }
    );

    //サウンド設定
    const sound = new Howl({
      // 読み込む音声ファイル
      src: ['/shared/audio/SE2.mp3']
    });
  
    sound.play();//再生

  });
}