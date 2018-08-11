
const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

    // 连接socket 
    io.on('connection', (socket) => {

        console.log('连接了')

        socket.on('to', (data) => {

            console.log(data)
            
            socket.emit('go', data)
        })

        // 监听群发
        socket.on('toAll', (data) => {

            console.log(data)

            io.emit('go', data)
        })
    })

    res.render('index')
})


server.listen(8000);




