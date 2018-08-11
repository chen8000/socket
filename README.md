# 服务器端
## 安装模块
* npm install socket.io

## 建立连接
 io.on('connection', (socket) => {
    
    //监听来自客户端的数据
    socket.on('ww', (data) => {
        console.log(data)
        
        
        // 向客户端发布数据
        // socket.emit('aa','我是服务器的数据')  /* 谁发给我，我回给谁 */
        // io.emit('aa','都有') /* 不管谁发我，我都告诉所有人 */
    })

})

# 客户端
## 
* <script src='http://localhost:8000/socket.io/socket.io.js'></script>
* var socket = io('http://localhost:8000/')  // 服务器地址

   var button = document.getElementById('button');
   button.onclick = function(){
        
        // 向服务器发布数据
        socket.emit('ww',{'chen':'666'})
    }
    
    
    // 监听来自服务器的数据 <br/>
    socket.on('aa', (data) => {
        console.log(data)
    })

## 多人

客户端发布
* socket.emit('msg', {data})

客户端监听
* socket.on('msgg', (data) => { console.log(data) })

服务器端发布
* socket.emit('msgg', {data})  // 谁发给我我就回给谁
* io.emit('msgg', {data}) // 回给所有监听的人

服务器端监听
* socket.on('msg', (data) => { console.log(data) })

服务器端获取建立连接的地址
* socket.request.url



区分房间
1. 房间号通过get传值，<br/>
2. 后台获取到get传值<br/>
3. 把get传的值 join()<br/>
服务器端加入房间<br/>
socket.join(roomid);  roomid为房间的标识<br/>

只给这个房间里的人广播<br/>
io.to(roomid).emit('msgg', {data})<br/>

通知所有人不包括自己<br/>
socket.broadcast.to(roomid).emit('msgg', {data})











