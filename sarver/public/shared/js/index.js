const socket = io();
const colorbtn = document.querySelector('.btnsquare');
const btnsquareList = document.querySelectorAll('.btnsquare');
console.log(btnsquareList);

for (let i = 0; i < btnsquareList.length; i++){

    btnsquareList.item(i).addEventListener('click',function(){
        socket.emit(`button${i}Click`,(i));
    });

    socket.on(`button${i}Click`,function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

}

//カラーボタン用
colorbtn.addEventListener('click',function(){
    socket.emit('colorbtnclick',00);
})

socket.on(`colorbtnclick`,function(msg){
    console.log('サーバーからデータを受信しました',msg);
    document.body.append(msg);
});
