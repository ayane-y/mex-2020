    const socket = io();
    const button0 = document.querySelector('#send-button-0');
    const button1 = document.querySelector('#send-button-1');
    const button2 = document.querySelector('#send-button-2');
    
    //RED
    button0.addEventListener('click',function(){
        socket.emit('button0Click',1);
        socket.emit('diameter',1);
    });

    socket.on('button0Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    //BLUE
    button1.addEventListener('click',function(){
        socket.emit('button1Click',1);
        socket.emit('diameter1',1);
    });

    socket.on('button1Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });

    //YELLOW
    button2.addEventListener('click',function(){
        socket.emit('button2Click',1);
        socket.emit('diameter2',1);
    });

    socket.on('button2Click',function(msg){
        console.log('サーバーからデータを受信しました',msg);
        document.body.append(msg);
    });