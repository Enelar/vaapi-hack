const express = require('express');
const http = require('http');
const shell = require('shelljs');

const PORT = 10002;

const app =  express();
const server = http.createServer(app);
const io = require('socket.io')(server);


io.on('connection', function(socket){
  console.log('Socket connection established');
  socket.on('join', function(url){
    shell.exec('smplayer '+url, {silent:true}, ()=>{
      socket.emit('messages', 'Success');
    });

  });
});


server.listen(PORT, function(){
  console.log(`server is listening on: ${PORT}`);
});
