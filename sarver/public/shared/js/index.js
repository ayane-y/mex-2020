const socket = io();
const colorbtn = document.querySelector('.colorbtn');

const about = document.querySelector('#js-about');
const aboutButtonClose = document.querySelector('#js-button-close');

const COLORS = [
    '#000000','#111111','#222222','#333333','#444444'
];
let colorCounter = 0;

aboutButtonClose.addEventListener('click',function(){
    console.log('close');
    //非表示の処理
    about.classList.add('about-hide');
});

const btnsquareList = document.querySelectorAll('.btnsquare');
console.log(btnsquareList);

//Swiper の初期化をする
const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
});

for (let i = 0; i < btnsquareList.length; i++){

    btnsquareList.item(i).addEventListener('click',function(){
        //ここでサーバーにデータを送っている
        socket.emit(`button${i}Click`,(i));
        // socket.emit(`button${i}Click`,ここ変える{id: ,coler: });
    });

    socket.on(`button${i}Click`,function(msg){
        console.log('サーバーからデータを受信しました',msg);
        // document.body.append(msg);
    });

}

//カラーボタン用
colorbtn.addEventListener('click',function(){
    console.log('カラーチェンジボタンを押しました');
    const color = COLORS[colorCounter % COLORS.length];
    socket.emit("colorbtnclick",color);
    colorCounter += 1;
})

socket.on(`colorbtnclick`,function(msg){
    console.log('サーバーから色を受信しました',msg);
});
