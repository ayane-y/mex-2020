    const socket = io();
    const button0 = document.querySelector('#send-button-0');
    const button1 = document.querySelector('#send-button-1');
    const button2 = document.querySelector('#send-button-2');
    const button3 = document.querySelector('#send-button-3');
    const button4 = document.querySelector('#send-button-4');
    const button5 = document.querySelector('#send-button-5');
    const button6 = document.querySelector('#send-button-6');
    const button7 = document.querySelector('#send-button-7');
    const button8 = document.querySelector('#send-button-8');
    const button9 = document.querySelector('#send-button-9');
    const button10 = document.querySelector('#send-button-10');
    const button11 = document.querySelector('#send-button-11');
    const button12 = document.querySelector('#send-button-12');
    const button13 = document.querySelector('#send-button-13');
    const button14 = document.querySelector('#send-button-14');
    const button15 = document.querySelector('#send-button-15');
    const button16 = document.querySelector('#send-button-16');
    const button17 = document.querySelector('#send-button-17');
    const button18 = document.querySelector('#send-button-18');
    const button19 = document.querySelector('#send-button-19');
    const button20 = document.querySelector('#send-button-20');
    const button21 = document.querySelector('#send-button-21');
    const button22 = document.querySelector('#send-button-22');
    const button23 = document.querySelector('#send-button-23');
    const button24 = document.querySelector('#send-button-24');
    const button25 = document.querySelector('#send-button-25');
    const button26 = document.querySelector('#send-button-26');
    const button27 = document.querySelector('#send-button-27');
    const button28 = document.querySelector('#send-button-28');

    
    // 0
    button0.addEventListener('click',function(){
        socket.emit('button0Click',0);
    });

    socket.on('button0Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 1
    button1.addEventListener('click',function(){
        socket.emit('button1Click',1);
    });

    socket.on('button1Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 2
    button2.addEventListener('click',function(){
        socket.emit('button2Click',2);
    });

    socket.on('button2Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 3
    button3.addEventListener('click',function(){
        socket.emit('button3Click',3);
    });

    socket.on('button3Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 4
    button4.addEventListener('click',function(){
        socket.emit('button4Click',4);
    });

    socket.on('button4Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 5
    button5.addEventListener('click',function(){
        socket.emit('button5Click',5);
    });

    socket.on('button5Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 6
    button6.addEventListener('click',function(){
        socket.emit('button6Click',6);
    });

    socket.on('button6Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 7
    button7.addEventListener('click',function(){
        socket.emit('button7Click',7);
    });

    socket.on('button7Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 8
    button8.addEventListener('click',function(){
        socket.emit('button8Click',8);
    });

    socket.on('button8Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 9
    button9.addEventListener('click',function(){
        socket.emit('button9Click',9);
    });

    socket.on('button9Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 10
    button10.addEventListener('click',function(){
        socket.emit('button10Click',10);
    });

    socket.on('button10Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 11
    button11.addEventListener('click',function(){
        socket.emit('button11Click',11);
    });

    socket.on('button11Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 12
    button12.addEventListener('click',function(){
        socket.emit('button12Click',12);
    });

    socket.on('button12Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 13
    button13.addEventListener('click',function(){
        socket.emit('button13Click',13);
    });

    socket.on('button13Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 14
    button14.addEventListener('click',function(){
        socket.emit('button14Click',14);
    });

    socket.on('button14Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 15
    button15.addEventListener('click',function(){
        socket.emit('button15Click',15);
    });

    socket.on('button15Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 16
    button16.addEventListener('click',function(){
        socket.emit('button16Click',16);
    });

    socket.on('button16Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 17
    button17.addEventListener('click',function(){
        socket.emit('button17Click',17);
    });

    socket.on('button17Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 18
    button18.addEventListener('click',function(){
        socket.emit('button18Click',18);
    });

    socket.on('button18Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 19
    button19.addEventListener('click',function(){
        socket.emit('button19Click',19);
    });

    socket.on('button19Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 20
    button20.addEventListener('click',function(){
        socket.emit('button20Click',20);
    });

    socket.on('button20Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 21
    button21.addEventListener('click',function(){
        socket.emit('button21Click',21);
    });

    socket.on('button21Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 22
    button22.addEventListener('click',function(){
        socket.emit('button22Click',22);
    });

    socket.on('button22Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 23
    button23.addEventListener('click',function(){
        socket.emit('button23Click',23);
    });

    socket.on('button23Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 24
    button24.addEventListener('click',function(){
        socket.emit('button24Click',24);
    });

    socket.on('button24Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 25
    button25.addEventListener('click',function(){
        socket.emit('button25Click',25);
    });

    socket.on('button25Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 26
    button26.addEventListener('click',function(){
        socket.emit('button26Click',26);
    });

    socket.on('button26Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 27
    button27.addEventListener('click',function(){
        socket.emit('button27Click',27);
    });

    socket.on('button27Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 28
    button28.addEventListener('click',function(){
        socket.emit('button28Click',28);
    });

    socket.on('button28Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });