//express_demo.js 文件
var express = require('express');
var yangzx = require("./yangzx.json")
var app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
    res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
    res.header("Access-Control-Allow-Credentials", "true"); // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
    res.header("Access-control-max-age", 1000); // 设置请求通过预检后多少时间内不再检验，减少预请求发送次数
    next();
})
app.get('/api/data', function (req, res) {
    res.send(yangzx);
})

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})