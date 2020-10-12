const pathList = document.querySelectorAll('.path');

console.log(pathList);

//pathList.item(Math.round(Math.random() * pathList.length)).classList.add('path-show');

const socket = io();
const BUTTON_NUM = 29;//スマホ側のボタンの数に合わせる

//アニメーションが始まる前の見た目を設定する
gsap.set(pathList,{
  scale: 0,//縮尺を０倍にする
  opacity: 0,//透明にする
  transformOrigin: "50% 50%",//変形の基点を図形の重心にする
});

for (let i = 0; i < BUTTON_NUM; i++){
  socket.on(`button${i}Click`,(msg) => {
    gsap.to(
      //動かしたい要素や素材
      pathList.item(i),{
        duration: 0.4, //アニメーションする時間
        scale: 1,
        opacity: 1,
        onComplete: () => {
          //消える時のアニメーションを書く
          gsap.to(
            pathList.item(i),{
              delay: 0.2,//　何秒後にこのアニメーションを始めるか
              duration: 0.4,
              opacity: 0,
            }
          );
        }
      }
    );
  });
}