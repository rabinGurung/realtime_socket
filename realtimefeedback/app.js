const app = require('express')()
const server = require('http').createServer(app)
const io  = require('socket.io')(server)
io.on('connection',(socket)=>{
    socket.emit('title','Hello there...,Welcome to the chat')
    socket.on('message',(message)=>{
        console.log("message is coming")
        socket.broadcast.emit('update',message)
    })    
})
server.listen(8000,()=>console.log('Server started'))