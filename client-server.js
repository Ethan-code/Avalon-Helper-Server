const express = require('express');
const path = require('path');
const app = express();

// 设置静态文件目录
app.use(express.static('public'));  // 假设你的 index.html 在名为 'public' 的目录中

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));  // 确保路径匹配你的文件结构
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

