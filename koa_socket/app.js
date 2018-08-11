




// art-template    腾讯开发的

const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');
const path = require('path');
const IO = require('koa-socket')    
const io = new IO()

const app = new Koa();
io.attach(app)

//配置 koa-art-template
render(app, {
    root : path.join(__dirname, 'views'), // 视图引擎的位置
    extname : '.html',  // 后缀名
    debug : process.env.NODE_ENV !== 'production'  // 是否开启调试模式
});





router.get('/', async (ctx) => {
    ctx.render('index')
});


app._io.on('connection', socket => { 
    console.log('建立连接') 

    socket.on('toserver', data => {
        console.log(data)

        socket.emit('touser', '我是服务器端的数据')
    }) 

    
})

//启动路由
app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()); //  根据上下文环境配置 response 响应头

app.listen(8000);























