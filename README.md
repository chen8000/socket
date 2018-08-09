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
