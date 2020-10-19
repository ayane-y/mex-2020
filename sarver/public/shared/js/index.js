const socket = io();
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