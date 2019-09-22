var express=require('express');
var app=express();

var server=app.listen(8080,"0.0.0.0");
var io=require('socket.io').listen(server);

app.get("/",function (req,res){

    res.sendFile(__dirname+"/canvas.html");
   
});

io.sockets.on('connection',function (socket){

    socket.on("gonder", function (data){
        io.emit("al",data);
    });
});



console.log("çalışıyor");

