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
    
    //RED 0
    button0.addEventListener('click',function(){
        socket.emit('button0Click',1);
        socket.emit('diameter',1);
    });

    socket.on('button0Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    //BLUE 1
    button1.addEventListener('click',function(){
        socket.emit('button1Click',1);
        socket.emit('diameter1',1);
    });

    socket.on('button1Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    //YELLOW 2
    button2.addEventListener('click',function(){
        socket.emit('button2Click',1);
        socket.emit('diameter2',1);
    });

    socket.on('button2Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 3
    button3.addEventListener('click',function(){
        socket.emit('button3Click',1);
    });

    socket.on('button3Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 4
    button4.addEventListener('click',function(){
        socket.emit('button4Click',1);
    });

    socket.on('button4Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 5
    button5.addEventListener('click',function(){
        socket.emit('button5Click',1);
    });

    socket.on('button5Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 6
    button6.addEventListener('click',function(){
        socket.emit('button6Click',1);
    });

    socket.on('button6Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 7
    button7.addEventListener('click',function(){
        socket.emit('button7Click',1);
    });

    socket.on('button7Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 8
    button8.addEventListener('click',function(){
        socket.emit('button8Click',1);
    });

    socket.on('button8Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 9
    button9.addEventListener('click',function(){
        socket.emit('button9Click',1);
    });

    socket.on('button9Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    // 10
    button10.addEventListener('click',function(){
        socket.emit('button10Click',1);
    });

    socket.on('button10Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });