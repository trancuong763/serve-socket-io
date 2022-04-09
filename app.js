const express = require('express')
const app = express()
const port = 3000
const { Server } = require("socket.io");
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('send', function({ message }) {
        // gửi cho tất cả mọi người trừ người gửi event
        socket.broadcast.emit('send', { message: message });
    })
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

$(selector).keypress(function(e) {

});