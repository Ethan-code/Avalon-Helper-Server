const http = require('http');
const socketIo = require('socket.io');

// 创建一个简单的 HTTP 服务器
const server = http.createServer((req, res) => {
    res.end("I am connected!");
});

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3001", // 允许的源（这里应该是你的客户端地址）
        methods: ["GET", "POST"] // 允许的 HTTP 方法
    }
});

// 设置连接事件监听
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // 监听特定消息例如 'message'
    socket.on('message', (msg) => {
        console.log('Message Received: ' + msg);
        io.emit('message', msg);  // 广播消息到所有客户端
    });
});

// 服务器监听在 3000 端口
server.listen(3000, () => {
    console.log('listening on *:3000');
});

