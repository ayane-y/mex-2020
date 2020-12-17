const socket = io();
const colorbtn = document.querySelector('.colorbtn');

const about = document.querySelector('#js-about');
const aboutButtonClose = document.querySelector('#js-button-close');

const COLORS = [
    '#c93e2a','#d16d29','#dbc426','#8bb93d','#3e9f49','#44a798','#325aa5','#5c4393','#ab5094','#c62f6f'
];
let color = COLORS[0];
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
        socket.emit(`button${i}Click`,{
            id: i,
            color: color
        });
    });

    socket.on(`button${i}Click`,function(msg){
        console.log('サーバーからデータを受信しました',msg);
        // document.body.append(msg);
    });

}

//カラーボタン用
colorbtn.addEventListener('click',function(){
    console.log('カラーチェンジボタンを押しました');
    colorbtn.classList.remove(`button-color-${colorCounter % COLORS.length}`);
    colorCounter += 1;
    color = COLORS[colorCounter % COLORS.length];
    colorbtn.classList.add(`button-color-${colorCounter % COLORS.length}`);
})

socket.on(`colorbtnclick`,function(msg){
    console.log('サーバーから色を受信しました',msg);
});
