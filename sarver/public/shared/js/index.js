const socket = io();

const about = document.querySelector('#js-about');
const aboutButtonClose = document.querySelector('#js-button-close');

aboutButtonClose.addEventListener('click',function(){
    console.log('close');
    //非表示の処理
    about.classList.add('about-hide');
});

const btnsquareList = document.querySelectorAll('.btnsquare');
console.log(btnsquareList);

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