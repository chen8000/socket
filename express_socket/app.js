
const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('index')
})

// 连接socket 
io.on('connection', (socket) => {

    console.log('连接了')

    // 向客户端发布一个 news
    socket.emit('news', { hello:'world' });

    // 监听客户端 my other event
    socket.on('my other event', (data) => {
        console.log(data)
    })
})

server.listen(8000);




