
const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res){
    fs.readFile('index.html', (err, data) => {
        if(err) return 
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(data)
    })
})

const io = require('socket.io')(app);

// 建立连接
io.on('connection', (socket) => {
    console.log('建立连接了')
    socket.on('ww', (data) => {
        console.log(data)

        // socket.emit('aa','我是服务器的数据')  /* 谁发给我，我回给谁 */
        // io.emit('aa','都有') /* 不管谁发我，我都告诉所有人 */
    })

})

app.listen(8000);



